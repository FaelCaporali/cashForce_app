
import { INTEGER, STRING } from 'sequelize';
import db from '../models';

export const CNPJOwnersColumns = {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  tradingName: {
    type: STRING,
    defaultValue: null,
  },
  cashforceTax: {
    type: STRING,
    defaultValue: null,
  },
  responsibleName: {
    type: STRING,
    defaultValue: null,
  },
  responsibleEmail: {
    type: STRING,
    defaultValue: null,
  },
  responsiblePosition: {
    type: STRING,
    defaultValue: null,
  },
  responsiblePhone: {
    type: STRING,
    defaultValue: null,
  },
  responsibleMobile: {
    type: STRING,
    defaultValue: null,
  },
  website: {
    type: STRING,
    defaultValue: null,
  },
  postalCode: {
    type: STRING,
    defaultValue: null,
  },
  address: {
    type: STRING,
    defaultValue: null,
  },
  number: {
    type: STRING,
    defaultValue: null,
  },
  complement: {
    type: STRING,
    defaultValue: null,
  },
  neighborhood: {
    type: STRING,
    defaultValue: null,
  },
  city: {
    type: STRING,
    defaultValue: null,
  },
  state: {
    type: STRING,
    defaultValue: null,
  },
  phoneNumber: {
    type: STRING,
    defaultValue: null,
  },
  situation: {
    type: STRING,
    defaultValue: null,
  },
  situationDate: {
    type: STRING,
    defaultValue: null,
  },
  cnpjId: {
    type: INTEGER,
    defaultValue: null,
    references: { model: 'cnpjs', key: 'id' },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  email: {
    type: STRING,
    defaultValue: null,
  },
};

export const CNPJOwnersOptions = {
  underscored: false,
  sequelize: db,
  timestamps: true,
};
