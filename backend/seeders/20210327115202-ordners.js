'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'ordners',
      [
        {
          name: 'belasting',
          note: 'alle documenten betreffende Belasting',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'zorg',
          note: 'alle documenten betreffende Zorg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'telecom',
          note: 'alle documenten betreffende Telecom',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'gas',
          note: 'alle documenten betreffende Gas',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'water',
          note: 'alle documenten betreffende Water',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'electriciteit',
          note: 'alle documenten betreffende Electriciteit',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ordners', null, {})
  },
}
