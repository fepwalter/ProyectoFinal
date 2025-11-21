import { generateToken, generateRefreshToken, verifyToken } from '../utils/jwt.util.js';

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email != "test@gmail.com" || password != "123456") {
            return res.status(401).json({ message: "Invalid email or password" });
        } else {
            const user = { id: "123", email: email };
            const token = await generateToken(user);
            res.status(200).json({ token });
        }
    } catch (error) {
        res.status(500).json({ message: "Error during login: " + error });
    }
};

export const refreshContoller = async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.sendStatus(401);

    try {
        const user = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);
        const newToken = generateToken({ id: "123", email: "test@gmail.com" });
        res.status(200).json({ token: newToken });
    } catch (error) {
        res.status(403).json({ message: "Invalid refresh token: " + error });
    }
};