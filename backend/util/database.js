const Sequelize = require('sequelize')

const sequelize = new Sequelize('Contactdetails','root','root',
{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize ;