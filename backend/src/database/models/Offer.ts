import { Model, INTEGER, BOOLEAN, DATE, STRING } from 'sequelize';
import { OfferAtt, OfferCreationAtt } from './types/Offer';
import TablesOptions from '../assets/models-helpers/TablesOpt';
import Order from './Order';
import Sponsor from './Sponsor';

class Offer extends Model<OfferAtt, OfferCreationAtt> {
  declare id?: number;
  declare tax: string;
  declare tariff: string;
  declare adValorem: string;
  declare float: string;
  declare iof: string;
  declare expiresIn: Date;
  declare paymentStatusSponsor?: boolean;
  declare paymentStatusProvider?: boolean;
  declare orderId: number;
  declare sponsorId: number;
}

Offer.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    tax: {
      type: STRING(255),
      allowNull: false,
    },
    tariff: {
      type: STRING(255),
      allowNull: false,
    },
    adValorem: {
      type: STRING(255),
      allowNull: false,
    },
    float: {
      type: STRING(255),
      allowNull: false,
    },
    iof: {
      type: STRING(255),
      allowNull: false,
    },
    expiresIn: {
      type: DATE,
      allowNull: false,
    },
    paymentStatusSponsor: {
      type: BOOLEAN,
      defaultValue: false,
    },
    paymentStatusProvider: {
      type: BOOLEAN,
      defaultValue: false,
    },
    orderId: {
      type: INTEGER,
      defaultValue: null,
      references: { model: 'orders', key: 'id' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    sponsorId: {
      type: INTEGER,
      defaultValue: null,
      references: { model: 'sponsors', key: 'id' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
  }, {
    ...TablesOptions,
    modelName: 'offers',
    initialAutoIncrement: '40',
  });

Order.hasMany(Offer, { sourceKey: 'id', foreignKey: 'orderId' });
Offer.belongsTo(Order, { foreignKey: 'orderId', targetKey: 'id' });

Sponsor.hasMany(Offer, { sourceKey: 'id', foreignKey: 'sponsorId' });
Offer.belongsTo(Sponsor, { foreignKey: 'sponsorId', targetKey: 'id' });

export default Offer;
