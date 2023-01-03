import { Router } from 'express';
import UserCtl from '../controllers/Users.controller';

export default class UserRouter {
  declare readonly router: Router;
  declare private readonly ctl: typeof UserCtl;

  constructor() {
    this.router = Router();
    this.ctl = UserCtl;
    this.initiatePublicRoutes();
  }

  private initiatePublicRoutes(): void {
    this.router.get('/me', async (req, res, next) => await new this.ctl(req, res, next).getMe());
  }
}
