import { Router } from 'express';
import { getRunning } from '../controllers/index.controller.js'

const router = Router();

router.get('/', getRunning);

export default router;
