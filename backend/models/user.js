const Sequelize = require('sequelize');

const sequelize = require('../util/database.js');

const User = sequelize.define('Contactdetails',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement : true,  
    allowNull : false,
    primaryKey: true
  },
  firstname: {
    type: Sequelize.STRING,

  },
  lastname: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,

  },
  mobilenumber: {
    type: Sequelize.INTEGER
  }
});

module.exports = User;