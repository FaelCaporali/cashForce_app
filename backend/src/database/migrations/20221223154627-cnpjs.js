'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cnpjs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cnpj: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false
      },
      companyType: {
        type: Sequelize.STRING(255),
        allowNull: false,
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
      }
    }, {
      initialAutoIncrement: 437,
      engine: 'InnoDB',
      charset: 'latin1',
      collate: 'latin1_swedish_ci',
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('cnpjs');
  }
};
