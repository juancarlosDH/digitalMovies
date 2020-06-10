'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
  }, {
    tableName : 'genres',
    paranoid: true
  });
  Genre.associate = function(models) {
    // associations can be defined here
  };
  return Genre;
};