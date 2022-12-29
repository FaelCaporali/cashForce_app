import express, { Express, Router } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import OrderRouter from './routes/Orders.routes';

export default class App {
  private readonly app: Express;
  private readonly orders: Router;
  //   private errorMiddleware: typeof errorMiddleware;

  constructor() {
    this.app = express();
    this.orders = new OrderRouter().router;
    //   this.errorMiddleware = errorMiddleware;
    
    this.config();
    this.servePublicRoutes();
    // this.handleError();
  }

  public listen(port: number) {
    this.app.listen(port, () => console.log(`Data server running on port ${port}`));
  }

  private config() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
  }

  private servePublicRoutes() {
    this.app.use('/orders', this.orders);
  }

//   private handleError() {
//     this.app.use(this.errorMiddleware);
//   }
}
