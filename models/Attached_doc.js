'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attached_doc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Attached_doc.init({
    name: DataTypes.STRING,
    note: DataTypes.TEXT,
    alert: DataTypes.STRING,
    maindocId: DataTypes.INTEGER,
    diskFile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Attached_doc',
  });
  return Attached_doc;
};