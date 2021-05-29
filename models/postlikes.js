'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostLikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PostLikes.init({
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    liked_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PostLikes',
  });
  return PostLikes;
};