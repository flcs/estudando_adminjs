'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('tasks', 'path', {
      type: Sequelize.DataTypes.STRING,
    });
    await queryInterface.addColumn('tasks', 'folder', {
      type: Sequelize.DataTypes.STRING,
    });
    await queryInterface.addColumn('tasks', 'type', {
      type: Sequelize.DataTypes.STRING,
    });
    await queryInterface.addColumn('tasks', 'filename', {
      type: Sequelize.DataTypes.STRING,
    });
    await queryInterface.addColumn('tasks', 'size', {
      type: Sequelize.DataTypes.INTEGER,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return promises.all([
      queryInterface.removeColumn('tasks', 'path'),
      queryInterface.removeColumn('tasks', 'folder'),
      queryInterface.removeColumn('tasks', 'type'),
      queryInterface.removeColumn('tasks', 'filename'),
      queryInterface.removeColumn('tasks', 'size')
    ]);
  }
};
