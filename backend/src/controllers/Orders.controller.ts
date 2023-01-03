import { NextFunction, Request, Response } from 'express';
import OrderServices from '../services/Orders.services';
import HttpException from '../shared/error/HttpException';

export default class OrderController {
  private readonly services: typeof OrderServices;
  
  constructor (private readonly req: Request, private readonly res: Response, private readonly next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.services = OrderServices;
  }
  
  async findBuyerOrders(): Promise<Response | void> {
    try {
      const { authorization } = this.req.headers;
      if (!authorization) this.next(new HttpException(400, 'Credentials must be provided'));
      const orders = await new this.services().findBuyerOrders(Number(authorization));
      return this.res.status(200).json(orders);
    } catch (e) {
      this.next(e);
    }
  }
}