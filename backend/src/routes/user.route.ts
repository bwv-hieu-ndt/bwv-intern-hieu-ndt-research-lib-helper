import express, { Router } from 'express';
import UserController from '@/controller/user.controller';

const router: Router = express.Router();
const userController = new UserController();

router.post('/', userController.createUser);
router.get('/', (req, res) => userController.getAllUser(req, res));
router.get('/sorted', (req, res) => userController.getUserSort(req, res));
router.get('/isValid/:id', (req, res) => userController.isValidUser(req, res));
router.get('/:id', (req, res) => userController.getUserById(req, res));

export default router;
