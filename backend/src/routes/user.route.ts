import express, { Router } from 'express';
import UserController from '@/controller/user.controller';

const router: Router = express.Router();
const userController = new UserController();

router.post('/', userController.createUser);
router.get('/:id', (req, res) => userController.getUserById(req, res));

export default router;
