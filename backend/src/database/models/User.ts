import { Model, INTEGER, STRING, BOOLEAN } from 'sequelize';
import { UserAtt, UserCreationAtt } from './types/User';
import db from '.';

class User extends Model<UserAtt, UserCreationAtt> {
  declare readonly id?: number;
  declare name: string;
  declare email: string;
  declare phoneNumber?: string;
  declare mobile?: string;
  declare department?: string;
  declare verificationCode?: string;
  declare emailChecked?: boolean;
  declare cashforceAdm: boolean;
}

User.init({
  id: {
    type: INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(255),
    allowNull: false,
  },
  email: {
    type: STRING(255),
    allowNull: false,
    unique: true,
  },
  phoneNumber: {
    type: STRING(255),
    defaultValue: null,
  },
  mobile: {
    type: STRING(255),
    defaultValue: null,
  },
  department: {
    type: STRING(255),
    defaultValue: null,
  },
  verificationCode: {
    type: STRING(255),
    defaultValue: null,
  },
  emailChecked: {
    type: BOOLEAN,
    defaultValue: false,
  },
  cashforceAdm: {
    type: BOOLEAN,
    defaultValue: false,
  }
}, {
  underscored: false,
  sequelize: db,
  modelName: 'user',
  timestamps: true,
  initialAutoIncrement: '122',
});

export default User;
