import { Router } from 'express';
import OrdersCtl from '../controllers/Orders.controller';

export default class OrderRouter {
  declare readonly router: Router;
  declare private readonly ctl: typeof OrdersCtl;

  constructor() {
    this.router = Router();
    this.ctl = OrdersCtl;
    this.initiatePublicRoutes();
  }

  private initiatePublicRoutes(): void {
    this.router.get('/', async (req, res, next) => await new this.ctl(req, res, next).findBuyerOrders());
  }
}
