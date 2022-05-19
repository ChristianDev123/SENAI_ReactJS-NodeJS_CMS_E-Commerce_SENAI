const Sequelize = require('sequelize');
const db = require('../config/db');
const productsTable = require('./Products');

const stocks = db.define('Stocks',{
    idStock:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    size:{
        type: Sequelize.STRING(4),
        allowNull: false,
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    unitValue:{
        type:Sequelize.DECIMAL(8,2),
        allowNull:false
    }
});

module.exports = stocks;