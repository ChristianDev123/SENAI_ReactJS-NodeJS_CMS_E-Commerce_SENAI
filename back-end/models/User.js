const sequelize = require('sequelize');
const db = require('../config/db');

const user = db.define('Users',{
    id:{
        type: sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    usuario:{
        type: sequelize.STRING,
        allowNull: false,
    },
    senha:{
        type: sequelize.STRING,
        allowNull: false
    },
    matricula:{
        type:sequelize.STRING,
        allowNull:false
    }
});

module.exports = user;