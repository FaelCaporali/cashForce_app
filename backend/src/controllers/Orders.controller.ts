import { NextFunction, Request, Response } from 'express';
import OrderServices from '../services/Orders.services';

export default class OrderController {
  private readonly services: typeof OrderServices;
  
  constructor (private readonly req: Request, private readonly res: Response, private readonly next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.services = OrderServices;
  }
  
  async listAll(): Promise<Response | void> {
    try {
      const orders = await new this.services().listAll();
      return this.res.status(200).json(orders);
    } catch (e) {
      this.next(e);
    }
  }
}