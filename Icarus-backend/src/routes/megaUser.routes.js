import { Router } from 'express';
import { getMegaUsers, getMegaUserById, posMegaUser, putMegaUser, upMegaUser, delMegaUser, delMegaUserPerm } from '../controllers/megaUser.controller.js';

const router = Router();

router.get('/mega-users', getMegaUsers);
router.get('/mega-user/:id', getMegaUserById);
router.post('/mega-user', posMegaUser);
router.put('/mega-user/:id', putMegaUser);
router.put('/mega-user/up/:id', upMegaUser);
router.put('/mega-user/del/:id', delMegaUser);
router.delete('/mega-user/:id', delMegaUserPerm);

export default router;