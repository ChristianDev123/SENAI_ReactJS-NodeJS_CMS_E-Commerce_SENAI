const Sequelize = require('sequelize')
const db =  require('../config/db')

const Images = db.define('images',{
    idImage:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    pathImage:{
        type: Sequelize.STRING,
    },
    nameImage:{
        type: Sequelize.STRING
    },
    id_product:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Images