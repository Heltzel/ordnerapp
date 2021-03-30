'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Main_doc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Main_doc.belongsTo(models.Ordner, {
        foreignKey: 'ordnerId',
      })
    }
  }
  Main_doc.init(
    {
      name: DataTypes.STRING,
      note: DataTypes.TEXT,
      alert: DataTypes.STRING,
      ordnerId: DataTypes.INTEGER,
      diskFile: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Main_doc',
    },
  )
  return Main_doc
}
