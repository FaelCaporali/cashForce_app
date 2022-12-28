import { Model, INTEGER, STRING, } from 'sequelize';
import { OrderAtt, OrderCreationAtt } from './types/Order';
import TablesOptions from '../assets/models-helpers/TablesOpt';

import Cnpj from './Cnpj';
import User from './User';
import Buyer from './Buyer';
import Provider from './Provider';

class Order extends Model<OrderAtt, OrderCreationAtt> {
  declare id?: number;
  declare orderNfId: string;
  declare orderNumber: string;
  declare orderPath?: string;
  declare orderFileName?: string;
  declare orderOriginalName?: string;
  declare emissionDate?: string;
  declare pdfFile?: string;
  declare emitedTo: string;
  declare nNf?: string;
  declare CTE?: string;
  declare value?: string;
  declare cnpjId?: number;
  declare userId?: number;
  declare buyerId?: number;
  declare providerId?: number;
  declare orderStatusBuyer?: '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8';
  declare orderStatusProvider?: '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8';
  declare deliveryReceipt?: string;
  declare cargoPackingList?: string;
  declare deliveryCtrc?: string;
}

Order.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderNfId: {
    type: STRING(255),
    allowNull: false,
    unique: true,
  },
  orderNumber: {
    type: STRING(255),
    allowNull: false,
  },
  orderPath: {
    type: STRING(255),
    defaultValue: null,
    unique: true,
  },
  orderFileName: {
    type: STRING(255),
    defaultValue: null,
    unique: true,
  },
  orderOriginalName: {
    type: STRING(255),
    defaultValue: null,
    unique: true,
  },
  emissionDate: {
    type: STRING(255),
    defaultValue: null,
  },
  pdfFile: {
    type: STRING(255),
    defaultValue: null,
  },
  emitedTo: {
    type: STRING(255),
    allowNull: false,
  },
  nNf: {
    type: STRING(255),
    defaultValue: null,
  },
  CTE: {
    type: STRING(255),
    defaultValue: null,
  },
  value: {
    type: STRING(255),
    defaultValue: null,
  },
  cnpjId: {
    type: INTEGER,
    defaultValue: null,
    references: { model: 'cnpjs', key: 'id' },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  userId: {
    type: INTEGER,
    defaultValue: null,
    references: { model: 'users', key: 'id' },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  buyerId: {
    type: INTEGER,
    defaultValue: null,
    references: { model: 'buyers', key: 'id' },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  providerId: {
    type: INTEGER,
    defaultValue: null,
    references: { model: 'providers', key: 'id' },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  orderStatusBuyer: {
    type: STRING(255),
    defaultValue: '0',
    validate: {
      is: /^[0-8]+$/i,
    },
  },
  orderStatusProvider: {
    type: STRING(255),
    defaultValue: '0',
    validate: {
      is: /^[0-8]+$/i,
    },
  },
  deliveryReceipt: {
    type: STRING(255),
    defaultValue: null,
  },
  cargoPackingList: {
    type: STRING(255),
    defaultValue: null,
  },
  deliveryCtrc: {
    type: STRING(255),
    defaultValue: null,
  },
}, {
  ...TablesOptions,
  modelName: 'orders',
  initialAutoIncrement: '540',
});

Cnpj.hasMany(Order, { sourceKey: 'id', foreignKey: 'cnpjId' });
Order.belongsTo(Cnpj, { foreignKey: 'cnpjId', targetKey: 'id' });

User.hasMany(Order, { sourceKey: 'id', foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

Buyer.hasMany(Order, { sourceKey: 'id', foreignKey: 'buyerId' });
Order.belongsTo(Buyer, { foreignKey: 'buyerId', targetKey: 'id' });

Provider.hasMany(Order, { sourceKey: 'id', foreignKey: 'providerId' });
Order.belongsTo(Provider, { foreignKey: 'providerId', targetKey: 'id' });

export default Order;
