import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Tämä on yksinkertainen Node.js Express -palvelin, joka käyttää MySQL-tietokantaa käyttäjien hallintaan.


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
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

app.listen(PORT, () => console.log(`Serveri käynnissä portissa ${PORT}`));