'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const getCommonColumns = require('../assets/migrations-helpers/getCommonColumns');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sponsors', {
      ...getCommonColumns(Sequelize),
      bank: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      bankAgency: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      account: {
        type: Sequelize.STRING,
        defaultValue: null,
      },      
    }, {
      initialAutoIncrement: 17,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('sponsors');
  }
};
