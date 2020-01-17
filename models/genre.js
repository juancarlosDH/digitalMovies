const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:123456@localhost:3306/movies_db');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
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