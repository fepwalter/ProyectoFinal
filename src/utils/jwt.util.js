import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const generateToken = (userData) => {
    const user = {
        id: userData.id,
        email: userData.email};
    return jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN });
}

export const generateRefreshToken = (userData) => {
    const user = {
        id: userData.id,
        email: userData.email};
    return jwt.sign(user, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN });
}

export const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
}