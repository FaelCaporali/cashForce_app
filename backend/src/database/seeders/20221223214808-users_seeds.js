'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'ALLAN SOUZA',
      email: 'allan@cashforce.com.br',
      verificationCode: '',
      emailChecked: true,
      createdAt: '2020-10-01 21:31:37',
      updatedAt: '2020-10-01 22:41:23',
      cashforceAdm: true,
    }], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
