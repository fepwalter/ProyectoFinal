import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import { authenticateToken } from './src/middlewares/authentication.js';
import productRoutes from './src/routes/products.route.js';
import authRoutes from './src/routes/auth.routes.js';
import { notFound } from './src/middlewares/resource.not.found.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);

app.use(authenticateToken);
app.use('/api', productRoutes);
//Middleware for handling 404 errors:
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
