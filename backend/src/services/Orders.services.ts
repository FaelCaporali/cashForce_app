// import { Model } from 'sequelize';
import Buyer from '../database/models/Buyer';
import Order from '../database/models/Order';
import Provider from '../database/models/Provider';
// import { IOrder, IOrderCreationalAtt } from '../interfaces/IOrder';

export default class OrderServices {
//   private readonly model: Model<IOrder, IOrderCreationalAtt>;
  private readonly model: typeof Order;

  constructor() {
    this.model = Order;
  }

  public async findBuyerOrders(id: number) {
    return await this.model.findAll({
      where: { buyerId: id },
      attributes: ['id', 'nNf', 'emissionDate', 'value', 'orderStatusBuyer'],
      include: [{ model: Buyer, attributes: ['id', 'name'] }, { model: Provider, attributes: ['id', 'name']}],
    });
  }
}