import { Router } from 'express';
import { getUsers, getUserById, posUser, putUser, upUser, delUser, delUserPerm } from '../controllers/user.controller.js';

const router = Router();

router.get('/users/:id', getUsers);
router.get('/user/:id&:megaId', getUserById);
router.post('/user', posUser);
router.put('/user/:id&:megaId', putUser);
router.put('/user/up/:id&:megaId', upUser);
router.put('/user/del/:id&:megaId', delUser);
router.delete('/user/:id&:megaId', delUserPerm);

export default router;
