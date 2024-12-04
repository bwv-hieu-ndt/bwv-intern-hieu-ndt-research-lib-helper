// // import UserController from "../../controller/use_controller/user_controller";
// import express from 'express';
// import UserController from './user_controller';

// class UserRoute {
//   public path = '/users';
//   public router = express.Router();
//   public userController = new UserController();

//   constructor() {
//     this.initializeRoutes();
//   }

//   private initializeRoutes() {
//     this.router
//       .route(`${this.path}`)
//       .get(this.userController.getAllUser)
//       .post(this.userController.createUser);
//   }
// }

// export default UserRoute;

// user_route.js
import express from 'express';
import UserController from './user_controller';

const router = express.Router();

const userController = new UserController();

router.post('', express.json(), (req, res) => {
  userController.createUser(req, res);
});

router.get('', (req, res) => {
  userController.getAllUser(req, res);
});

export default router;

