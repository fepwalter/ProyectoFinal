import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secrtetKey = process.env.JWT_SECRET_KEY;

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access token is missing' });
    }
    jwt.verify(token, secrtetKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid access token' });
        }
        next();
    });
}