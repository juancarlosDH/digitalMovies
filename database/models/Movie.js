module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Movies', {
    // attributes
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false
    },
    awards: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    poster2: {
      type: DataTypes.STRING,
      allowNull: true
    }, 
    createdAt : {
      field : 'created_at',
      type : DataTypes.DATE
    }, 
    updatedAt : {
      field : 'updated_at',
      type : DataTypes.DATE
    }
  }, {
    tableName : 'movies',
    timestamps : false
  });

  return Model;
}
