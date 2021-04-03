'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Attached_docs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.TEXT,
      },
      alert: {
        type: Sequelize.STRING,
      },
      maindocId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        refernces: {
          model: 'Main_doc',
          key: 'id',
          as: 'maindocId',
        },
      },
      diskFile: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Attached_docs')
  },
}
