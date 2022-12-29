import { Model, STRING, INTEGER, BOOLEAN } from 'sequelize';
import { OrderPortionAtt, OrderPortionCreationAtt } from './types/OrderPortion';

import TablesOptions from '../assets/models-helpers/TablesOpt';

import Order from './Order';

class OrderPortion extends Model<OrderPortionAtt, OrderPortionCreationAtt> {
  declare id?: number;
  declare nDup: string;
  declare dVenc: string;
  declare vDup: string;
  declare availableToMarket?: boolean;
  declare orderId?: number;
}

OrderPortion.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nDup: {
    type: STRING(255),
    allowNull: false,
  },
  dVenc: {
    type: STRING(255),
    allowNull: false,
  },
  vDup: {
    type: STRING(255),
    allowNull: false,
  },
  availableToMarket: {
    type: BOOLEAN,
    defaultValue: true,
  },
  orderId: {
    type: INTEGER,
    defaultValue: null,
    references: { model: 'orders', key: 'id' },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  }
},
{
  ...TablesOptions,
  modelName: 'orderportions',
  initialAutoIncrement: '612',
});

Order.hasMany(OrderPortion, { foreignKey: 'orderId', sourceKey: 'id' });
OrderPortion.belongsTo(Order, { foreignKey: 'orderId', targetKey: 'id' });

export default OrderPortion;