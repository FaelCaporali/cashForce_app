'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      tax: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tariff: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      adValorem: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      float: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      iof: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      paymentStatusSponsor: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      paymentStatusProvider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      orderId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'orders', key: 'id' },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        key: true,
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'sponsors', key: 'id' },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        key: true,
      },
    }, {
      initialAutoIncrement: 40,
      engine: 'InnoDB',
      charset: 'latin1',
      collate: 'latin1_swedish_ci',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('offers');
  }
};
