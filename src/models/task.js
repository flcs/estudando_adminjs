'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    due_date: DataTypes.DATE,
    effort: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    order: DataTypes.INTEGER,
    status: DataTypes.STRING,
    path: DataTypes.STRING,
    folder: DataTypes.STRING,
    type: DataTypes.STRING,
    filename: DataTypes.STRING,
    size: DataTypes.STRING,
    user_id: DataTypes.STRING,
    project_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};