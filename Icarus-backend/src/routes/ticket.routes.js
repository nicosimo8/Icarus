import { Router } from 'express';
import { getTickets, getTicketById, posTicket, putTicket, delTicketPerm } from '../controllers/ticket.controller.js';

const router = Router();

router.get('/tickets/:id', getTickets);
router.get('/ticket/:id&:megaId', getTicketById);
router.post('/ticket', posTicket);
router.put('/ticket/:id&:megaId', putTicket);
router.delete('/ticket/:id&:megaId', delTicketPerm);

export default router;
