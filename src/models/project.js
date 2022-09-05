'use strict';
import Sequelize, { Model } from 'sequelize';


class Project extends Model {
    static init(sequelize) {
        super.init({
          name: Sequelize.STRING,
          description: Sequelize.STRING,
          status: Sequelize.ENUM('active', 'archived'),
          user_id: Sequelize.INTEGER
        }, 
        {
          sequelize,
          name: {
            singular: 'project',
            plural: 'projects'
          }
        }
      );
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
    }
  }

export default Project;