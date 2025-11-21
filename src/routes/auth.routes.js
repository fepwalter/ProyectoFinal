import { Router } from 'express';
import { loginController, refreshContoller } from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', loginController);
router.post('/refreshToken', refreshContoller); // Placeholder for refresh token route

export default router;