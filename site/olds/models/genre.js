const Sequelize = require('sequelize')
  
const Model = Sequelize.Model;
class Genre extends Model {}
Genre.init({
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ranking: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  active: {
    type: Sequelize.TINYINT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'genres',
  timestamps : false
});

module.exports = Genre;