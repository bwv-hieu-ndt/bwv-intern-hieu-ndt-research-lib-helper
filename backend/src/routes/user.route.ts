import express, { Router } from 'express';
import UserController from '@/controller/user.controller';

const router: Router = express.Router();
const userController = new UserController();

router.post('/', userController.createUser);

export default router;
