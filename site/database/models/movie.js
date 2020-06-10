
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', 
  {
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    length : {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    awards : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rating : {
      type: DataTypes.DECIMAL(3,1),
      allowNull:true
    },
    releaseDate : {
      type: DataTypes.STRING,
      allowNull:true
    },
    genreId : {
      type: DataTypes.INTEGER,
      allowNull:true
    }
  },
  {
    tableName : 'movies',
    //underscored : true,
    paranoid: true
  });
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsTo(models.Genre, {
      as: 'genre',
      foreignKey : 'genreId'
    })
  };
  return Movie;
};