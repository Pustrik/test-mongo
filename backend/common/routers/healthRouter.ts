import express from 'express';
import 'express-async-errors';
import HealthController from '../controllers/health.controller';
import HealthService from '../services/health.service';

const healthRouter = express.Router();
const appController = new HealthController(new HealthService());

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
healthRouter.get('/health', appController.healthCheck);

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
healthRouter.get('/favicon', appController.favicon);

export default healthRouter;
