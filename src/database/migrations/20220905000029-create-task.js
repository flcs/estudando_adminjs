'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      due_date: {
        type: Sequelize.DATE
      },
      effort: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      path: {
        type: Sequelize.STRING
      },
      folder: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};