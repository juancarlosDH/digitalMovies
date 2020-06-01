const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:123456@localhost:3306/movies_db');

const Genre = require('./genre')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Model = Sequelize.Model;
class Movie extends Model {}
Movie.init({
  // attributes
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.DECIMAL(3,1),
    allowNull: false
  },
  awards: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  release_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  length: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  genre_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  poster: {
    type: Sequelize.STRING,
    allowNull: true
  },
  poster2: {
    type: Sequelize.STRING,
    allowNull: true
  }, 
  createdAt : {
    field : 'created_at',
    type : Sequelize.DATE
  }, 
  updatedAt : {
    field : 'updated_at',
    type : Sequelize.DATE
  }
}, {
  sequelize,
  modelName: 'movies',
  timestamps : true
});



module.exports = Movie;