'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nDup: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      dVenc: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      vDup: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      availableToMarket: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
      }
    }, {
      initialAutoIncrement: 612,
      engine: 'InnoDB',
      charset: 'latin1',
      collate: 'latin1_swedish_ci',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orderportions');
  }
};
