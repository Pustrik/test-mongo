import { Express, Router } from 'express';
import dotenv from 'dotenv';
dotenv.config();

export default class StartApp {
  prefix: string;
  constructor(app: Express, ...routes: Router[]) {
    this.prefix = process.env.PREFIX;
    this.routesFactory(app, ...routes);
  }
  private routesFactory = (app: Express, ...routes: Router[]) => {
    routes.forEach((route) => app.use(this.prefix, route));
  };
}
