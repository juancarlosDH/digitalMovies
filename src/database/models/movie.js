'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING
  }, {
    tableName : 'movies',
    underscored : true,
    paranoid: true
  });
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};