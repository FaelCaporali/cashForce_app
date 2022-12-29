module.exports = function getCommonColumns(sql) {
  return {
    id: {
      type: sql.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sql.STRING,
      allowNull: false,
    },
    tradingName: {
      type: sql.STRING,
      defaultValue: null,
    },
    cashforceTax: {
      type: sql.STRING,
      defaultValue: null,
    },
    responsibleName: {
      type: sql.STRING,
      defaultValue: null,
    },
    responsibleEmail: {
      type: sql.STRING,
      defaultValue: null,
    },
    responsiblePosition: {
      type: sql.STRING,
      defaultValue: null,
    },
    responsiblePhone: {
      type: sql.STRING,
      defaultValue: null,
    },
    responsibleMobile: {
      type: sql.STRING,
      defaultValue: null,
    },
    website: {
      type: sql.STRING,
      defaultValue: null,
    },
    postalCode: {
      type: sql.STRING,
      defaultValue: null,
    },
    address: {
      type: sql.STRING,
      defaultValue: null,
    },
    number: {
      type: sql.STRING,
      defaultValue: null,
    },
    complement: {
      type: sql.STRING,
      defaultValue: null,
    },
    neighborhood: {
      type: sql.STRING,
      defaultValue: null,
    },
    city: {
      type: sql.STRING,
      defaultValue: null,
    },
    state: {
      type: sql.STRING,
      defaultValue: null,
    },
    phoneNumber: {
      type: sql.STRING,
      defaultValue: null,
    },
    situation: {
      type: sql.STRING,
      defaultValue: null,
    },
    situationDate: {
      type: sql.STRING,
      defaultValue: null,
    },
    createdAt: {
      type: sql.DATE,
      defaultValue: sql.fn('now'),
    },
    updatedAt: {
      type: sql.DATE,
      defaultValue: sql.fn('now'),
    },
    cnpjId: {
      type: sql.INTEGER,
      defaultValue: null,
      references: { model: 'cnpjs', key: 'id' },
      key: true,
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    email: {
      type: sql.STRING,
      defaultValue: null,
    },
  };
};
