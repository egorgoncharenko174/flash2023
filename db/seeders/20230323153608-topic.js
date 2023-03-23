'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Topics',
      [
        {
          title: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};

