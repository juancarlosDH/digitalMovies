'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      poster: {
        type: Sequelize.STRING,
        allowNull: true
      },
      length : {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      awards : {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      rating : {
        type: Sequelize.DECIMAL(3,1),
        allowNull:true
      },
      releaseDate : {
        type: Sequelize.STRING,
        allowNull:true
      },
      genreId : {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};