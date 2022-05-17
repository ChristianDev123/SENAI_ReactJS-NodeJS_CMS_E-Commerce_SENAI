const Sequelize = require('sequelize');
const stockTable = require('./Stocks');
const db = require('../config/db');

const products = db.define('Products',{
    idProduct:{
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
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});

module.exports = products;