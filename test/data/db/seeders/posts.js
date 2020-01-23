'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("posts", [
      {
        name: "user1",
        email: "email1",
        text: "text1",
        createdAt: "2019-1-1 1:1",
        updatedAt: "2019-1-1 1:1"

      },
      {
        name: "user2",
        email: "email3",
        text: "text3",
        createdAt: "2019-1-1 1:1",
        updatedAt: "2019-1-1 1:1"

      },
      {
        name: "user3",
        email: "email2",
        text: "text1",
        createdAt: "2019-1-1 1:1",
        updatedAt: "2019-1-1 1:1"
      },
      {
        name: "user2",
        email: "email1",
        text: "text2",
        createdAt: "2019-1-1 1:1",
        updatedAt: "2019-1-1 1:1"
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("posts", null, {});
  }
};
