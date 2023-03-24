'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const usersData = [
      {
        name: 'Igor',
        email: 'igor_ne@mail.ru',
        password: await bcrypt.hash('123456', 10),
      },
      {
        name: 'Vasya',
        email: 'vasya_ne@mail.ru',
        password: await bcrypt.hash('123456', 10),
      },
      {
        name: 'Pasha',
        email: 'pasha_ne@mail.ru',
        password: await bcrypt.hash('123456', 10),
      },
    ];
    const users = usersData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};