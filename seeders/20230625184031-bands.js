'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('bands', [
      {
        name: 'The Beatles',
        genre: 'Rock',
        available_start_time: '12:00',
        end_time: '13:00'
      },
      {
        name: 'The Rolling Stones',
        genre: 'Rock',
        available_start_time: '14:00',
        end_time: '15:00'
      },
      {
        name: 'AFI',
        genre: 'Punk',
        available_start_time: '16:00',
        end_time: '17:00'
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('bands', null, {});
  }
};