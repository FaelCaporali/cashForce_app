'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      orderNfId: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      orderNumber: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        unique: true,
      },
      orderFileName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        unique: true,
      },
      orderOriginalName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        unique: true,
      },
      emissionDate: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      pdfFile: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      emitedTo: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      CTE: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      value: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'cnpjs', key: 'id' },
        key: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      userId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'users', key: 'id' },
        key: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      buyerId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'buyers', key: 'id' },
        key: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      providerId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'providers', key: 'id' },
        key: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      orderStatusBuyer: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        validate: {
          is: /^[0-8]$/i,
        },
      },
      orderStatusProvider: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        validate: {
          is: /^[0-8]$/i,
        },
      },
      deliveryReceipt: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      cargoPackingList: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      deliveryCtrc: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
    }, {
      initialAutoIncrement: 540,
      engine: 'InnoDB',
      charset: 'latin1',
      collate: 'latin1_swedish_ci',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
