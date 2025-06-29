import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import authenticateToken from './middleware/authenticateToken.js';
import multer from 'multer';

// Määritellään multerin tallennusasetukset dokumenttien lataamiselle
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Luo kansio 'uploads' projektin juureen
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Tämä on yksinkertainen Node.js Express -palvelin, joka käyttää MySQL-tietokantaa käyttäjien hallintaan.


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Palvelin staattiset tiedostot 'uploads' kansiosta
const JWT_SECRET = process.env.JWT_SECRET; // Vaihda tämä vahvaan salaisuuteen

// Luo MySQL-yhteys
const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// POST /api/users - lisää uusi käyttäjä hashatulla salasanalla
app.post('/api/users', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Anna käyttäjätunnus ja salasana.' });

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds); // hashataan salasana
    await db.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    res.status(201).json({ message: 'Käyttäjä lisätty!' });
  } catch (err) {
    res.status(500).json({ error: 'Virhe lisättäessä käyttäjää.' });
  }
});

// POST /api/login - tarkistaa käyttäjätunnuksen ja salasanan
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Anna käyttäjätunnus ja salasana.' });

  try {
    // Hae käyttäjä tietokannasta
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Väärä käyttäjätunnus tai salasana.' });
    }

    const user = rows[0];
    // Tarkista salasana
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Väärä käyttäjätunnus tai salasana.' });
    }

    // Luo JWT-token
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '2h' });
    res.json({ message: 'Kirjautuminen onnistui!', token });
  } catch (err) {
    res.status(500).json({ error: 'Kirjautumisessa tapahtui virhe.' });
  }

});

// POST /api/hallitus – korvaa koko hallituksen
app.post('/api/hallitus', authenticateToken, async (req, res) => {
  const { hallitus } = req.body;
  try {
    await db.execute('DELETE FROM hallitus');
    for (const jäsen of hallitus) {
      await db.execute(
        'INSERT INTO hallitus (nimi, titteli, puhelinnumero, sähköposti) VALUES (?, ?, ?, ?)',
        [jäsen.nimi, jäsen.titteli, jäsen.puhelinnumero, jäsen.sähköposti]
      );
    }
    res.json({ message: 'Hallitus päivitetty!' });
  } catch (err) {
    res.status(500).json({ error: 'Virhe tallennuksessa.' });
  }
});

// DELETE /api/hallitus – tyhjennä hallitus
app.delete('/api/hallitus', authenticateToken, async (req, res) => {
  try {
    await db.execute('DELETE FROM hallitus');
    res.json({ message: 'Hallitus tyhjennetty!' });
  } catch (err) {
    res.status(500).json({ error: 'Virhe tyhjennyksessä.' });
  }
});

// GET /api/hallitus – hae hallituksen jäsenet
app.get('/api/hallitus', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM hallitus');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Virhe haettaessa hallitusta.' });
  }
});

// POST /api/kokoukset – lisää uusi kokous
app.post('/api/kokoukset', authenticateToken, async (req, res) => {
  const { tyyppi, aika, paikka } = req.body;
  if (!tyyppi || !aika || !paikka) {
    return res.status(400).json({ error: 'Kaikki kentät ovat pakollisia.' });
  }
  try {
    await db.execute(
      'INSERT INTO kokoukset (tyyppi, aika, paikka) VALUES (?, ?, ?)',
      [tyyppi, aika, paikka]
    );
    res.json({ message: 'Kokous lisätty!' });
  } catch (err) {
    res.status(500).json({ error: 'Virhe tallennuksessa.' });
  }
});

// POST /api/tapahtumat – lisää uusi tapahtuma
app.post('/api/tapahtumat', authenticateToken, upload.single('pdf'), async (req, res) => {
  const { otsikko, paikka, aika, kuvaus } = req.body;
  const pdfPath = req.file ? req.file.filename : null;

  if (!otsikko || !paikka || !aika || !kuvaus) {
    return res.status(400).json({ error: 'Kaikki kentät paitsi PDF ovat pakollisia.' });
  }

  try {
    await db.execute(
      'INSERT INTO tapahtumat (otsikko, paikka, aika, kuvaus, pdf) VALUES (?, ?, ?, ?, ?)',
      [otsikko, paikka, aika, kuvaus, pdfPath]
    );
    res.json({ message: 'Tapahtuma lisätty!' });
  } catch (err) {
    res.status(500).json({ error: 'Virhe tallennuksessa.' });
  }
});

// Hae tulevat kokoukset aikajärjestyksessä
app.get('/api/kokoukset', async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM kokoukset WHERE aika > NOW() ORDER BY aika ASC"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Virhe haettaessa kokouksia." });
  }
});

// Hae tulevat tapahtumat aikajärjestyksessä
app.get('/api/tapahtumat', async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM tapahtumat WHERE aika > NOW() ORDER BY aika ASC"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Virhe haettaessa tapahtumia." });
  }
});

app.listen(PORT, () => console.log(`Serveri käynnissä portissa ${PORT}`));