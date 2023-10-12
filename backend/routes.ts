import express from 'express';
import healthRouter from './common/routers/healthRouter';
import exceptionRouter from './common/routers/exception.router';
import userRouter from './common/routers/user.router';

const appRouter = express.Router();

appRouter.use(healthRouter);
appRouter.use(exceptionRouter);
appRouter.use(userRouter);

export default appRouter;
