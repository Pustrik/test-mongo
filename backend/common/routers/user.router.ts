import UserService from '../services/user.service';
import UserController from '../controllers/user.controller';
import express from 'express';

const userRouter = express.Router();
const userController = new UserController(new UserService());

/**
 * @openapi
 * /users:
 *  get:
 *     tags:
 *     - Users
 *     description: Creates new user
 *     responses:
 *       200:
 *         description: User created
 */
userRouter.post('/users', userController.createUser);

export default userRouter;
