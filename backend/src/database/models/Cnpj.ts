import { Model, INTEGER, STRING } from 'sequelize';
import { CnpjAtt, CnpjCreationAtt } from './types/Cnpj';
import TablesOptions from '../assets/models-helpers/TablesOpt';

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
  ...TablesOptions,
  modelName: 'cnpj',
  initialAutoIncrement: '437',
});

export default Cnpj;
