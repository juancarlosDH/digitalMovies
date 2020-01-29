module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Genre', {
    
    // attributes
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ranking: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    tableName: 'genres',
    timestamps : false
  })
  return Model;
}