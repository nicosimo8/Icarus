import { Router } from 'express';
import { getWagons, getWagonById, posWagon, putWagon, delWagonPerm } from '../controllers/wagon.controller.js';

const router = Router();

router.get('/wagons/:id', getWagons);
router.get('/wagon/:id&:tktId', getWagonById);
router.post('/wagon', posWagon);
router.put('/wagon/:id&:tktId', putWagon);
router.delete('/wagon/:id&:tktId', delWagonPerm);

export default router;
