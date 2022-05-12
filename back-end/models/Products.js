const Sequelize = require('sequelize');
const db = require('../config/db');

const products = db.define('Products',{
    idProducts:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    code:{
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = products;