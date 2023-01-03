import { NextFunction, Request, Response } from 'express';
import UserService from '../services/Users.services';
import HttpException from '../shared/error/HttpException';

export default class UserController {
  private readonly services: typeof UserService;
  
  constructor (private readonly req: Request, private readonly res: Response, private readonly next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.services = UserService;
  }

  async getMe(): Promise<Response | void> {
    try {
      const { authorization } = this.req.headers;
      if (!authorization) return this.next(new HttpException(400, 'Credentials must be provided'));
      const user = await new this.services().getMe(Number(authorization));
      return this.res.status(200).json(user);
    } catch (e) {
      this.next(e);
    }
  }
}