const Model = require('sequelize')
const sequelize = new Model('mysql://root:123456@localhost:3306/movies_db');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.export =  Model;