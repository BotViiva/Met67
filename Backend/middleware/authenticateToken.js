import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // Oletetaan muoto: "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token puuttuu.' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
        console.error("JWT verify error:", err);
      return res.status(403).json({ error: 'Token on virheellinen tai vanhentunut.' });
    }
    req.user = user; // Voit käyttää käyttäjätietoja jatkossa
    next();
  });
};

export default authenticateToken;