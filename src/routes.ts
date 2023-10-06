import express from 'express';
import healthRouter from './common/routers/healthRouter';
import exceptionRouter from './common/routers/exception.router';

const appRouter = express.Router();

appRouter.use(healthRouter);
appRouter.use(exceptionRouter);

export default appRouter;
