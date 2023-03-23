'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('../dataQuastions');

module.exports = {
  async up(queryInterface) {
    const arrQA = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('QAs', arrQA, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('QAs', null, {});
  },
};