'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    tableName : 'users',
    underscored : true,
    paranoid: true
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};