// import { Model } from 'sequelize';
import Order from '../database/models/Order';
// import { IOrder, IOrderCreationalAtt } from '../interfaces/IOrder';

export default class OrderServices {
//   private readonly model: Model<IOrder, IOrderCreationalAtt>;
  private readonly model: typeof Order;

  constructor() {
    this.model = Order;
  }

  public async listAll() {
    return await this.model.findAll({ include: { all: true } });
  }
}