import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js'
import megaUserRoutes from './routes/megaUser.routes.js';
import usersRoutes from './routes/users.routes.js';
import ticketRoutes from './routes/ticket.routes.js';
import wagonRoutes from './routes/wagon.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use(indexRoutes);
app.use('/api', authRoutes);
app.use('/api', megaUserRoutes);
app.use('/api', usersRoutes);
app.use('/api', ticketRoutes);
app.use('/api', wagonRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Not found'
  });
});

export default app;