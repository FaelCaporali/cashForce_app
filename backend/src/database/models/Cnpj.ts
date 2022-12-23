import { Model, INTEGER, STRING } from 'sequelize';
import { CnpjAtt, CnpjCreationAtt } from './types/Cnpj';
import db from '.';

class Cnpj extends Model<CnpjAtt, CnpjCreationAtt> {
  declare readonly id?: number;
  declare cnpj: string;
  declare companyType: string;
}

Cnpj.init({
  id: {
    type: INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  cnpj: {
    type: STRING(255),
    allowNull: false,
    unique: true,
  },
  companyType: {
    type: STRING(255),
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  modelName: 'cnpj',
  timestamps: true,
});

export default Cnpj;
