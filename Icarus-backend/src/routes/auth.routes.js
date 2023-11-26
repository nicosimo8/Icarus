import { Router } from 'express';
import { authLogin } from '../controllers/auth.controller.js';

const router = Router();

router.get('/login/user=:userName&pass=:pass', authLogin);

export default router;
