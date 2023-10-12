import express from 'express';
import 'express-async-errors';
import ExceptionController from '../controllers/exception.controller';
import ExceptionService from '../services/exception.service';

const exceptionRouter = express.Router();
const exceptionController = new ExceptionController(new ExceptionService());

/**
 * @openapi
 * /exception:
 *  get:
 *     tags:
 *     - Exception
 *     description: Throws test exception
 *     responses:
 *       403:
 *         description: App is up and running
 */
exceptionRouter.get('/exception', exceptionController.exceptionTest);

export default exceptionRouter;
