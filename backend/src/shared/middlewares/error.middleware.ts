import type { Request, Response, NextFunction } from 'express';
import HttpException from '../error/HttpException';

export default function errorMiddleware(e: HttpException, req: Request, res: Response, _next: NextFunction): Response {
  console.log(
    `Error: ${e.name},
    Cause: ${e.cause},
    Stack: ${e.stack}`);
  return res.status(e.status || 500).json({ message: e.message || 'Internal Server Error'});
}