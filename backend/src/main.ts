import express, { Router } from 'express';
import cors from 'cors';
import UserRoute from './routes/user.route';
import { testConnection } from './database/connection';

import userRoutes from '@/routes/user.route';

const boostrap = async () => {
  const app = express();
  const route = express.Router();
  const port = 8080;

  app.use(express.json());
  app.use(cors({ origin: '*' }));
  // app.use('/', route.route);

  testConnection();

  app.get('/', (req, res) => {
    res.status(201).json('Hello world');
  });

  // const userRoute = new UserRoute(route);
  app.use('/api/users', userRoutes);

  app.listen(port, () => {
    console.log(__dirname + '/../sequelize.config.js');
    console.log(`Server is running on: http://localhost:${port}/`);
  });
};

boostrap();
