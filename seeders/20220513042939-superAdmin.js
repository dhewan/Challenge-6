'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('users', [{
        nama: "superadmin",
        email:"superadmin@gmail.com" ,
        password: "superadmin",
        type: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
