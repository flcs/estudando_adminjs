'use strict';

import { match } from 'assert';
import Sequelize, { Model } from 'sequelize';

  class User extends Model {
    static init(sequelize) {
      super.init({
        initials: {
          type: Sequelize.VIRTUAL,
          get() {
            const pedaco = this.name.split(' ');
            if (pedaco.length > 1) {
              return `${pedaco[0][0]}${pedaco[pedaco.length - 1][0]}`
            } else {
              return pedaco[0][0]
            }
          }
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        role: Sequelize.ENUM('admin', 'manager', 'developer'),
        status: Sequelize.ENUM('active', 'archived')
      }, {
        sequelize,
        name: {
          singular: 'user',
          plural: 'users'
        }
      })
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Project);
    }
  }
  // User.init({
  //   name: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   password_hash: DataTypes.STRING,
  //   role: DataTypes.STRING,
  //   status: DataTypes.STRING
  // }, {
  //   sequelize,
  //   modelName: 'User',
  // });
  // return User;

export default User;
