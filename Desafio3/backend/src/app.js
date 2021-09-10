import cors from 'cors';
import express from 'express';

import productsRoutes from './routes/productsRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(userRoutes);
app.use(productsRoutes);

export default app;
