import express from 'express';
import 'express-async-errors';
import AppController from '../controllers/app.controller';
import AppService from '../services/app.service';

const appRouter = express.Router();
const appController = new AppController(new AppService());

/**
 * @openapi
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
appRouter.get('/health', appController.healthCheck);

/**
 * @openapi
 * /favicon:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Returns app ico
 *     responses:
 *       200:
 *         description: App is up and running
 */
appRouter.get('/favicon', appController.favicon);

export default appRouter;
