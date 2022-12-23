'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      mobile: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      department: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      verificationCode: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      emailChecked: {
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
      cashforceAdm: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }
    }, {
      initialAutoIncrement: 122,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};
