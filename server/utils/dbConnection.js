const Sequelize = require("sequelize")

const sequelize = new Sequelize('prepmate', 'root', 'Ab@yDipit', {
    host:'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;