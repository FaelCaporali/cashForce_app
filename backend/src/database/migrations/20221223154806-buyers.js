'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const getCommonColumns = require('../assets/migrations-helpers/getCommonColumns');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
      ...getCommonColumns(Sequelize),
      confirm: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    }, {
      initialAutoIncrement: 152,
      engine: 'InnoDB',
      charset: 'latin1',
      collate: 'latin1_swedish_ci',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('buyers');
  }
};
