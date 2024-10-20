import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes'
import prisma from './prismaClient';



const app = express();
app.use(cors());
app.use(express.json());

app.use('/api',todoRoutes);

const startServer = async () => {
    try {
      await prisma.$connect();
      console.log('Connected to PostgreSQL');
      app.listen(5000, () => console.log('Server running on http://localhost:5000'));
    } catch (error) {
      console.error('Error starting server:', error);
    }
  };
  
  startServer();