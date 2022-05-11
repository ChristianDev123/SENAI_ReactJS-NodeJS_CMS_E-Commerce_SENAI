const sequelize = require('sequelize');
const table = require('../models/User');

const new_User = async(dados)=>{
    await table.create({
        id:"null",
        usuario:dados.user,
        senha: dados.pass,
        matricula: dados.mat
    });
};

module.exports = new_User;