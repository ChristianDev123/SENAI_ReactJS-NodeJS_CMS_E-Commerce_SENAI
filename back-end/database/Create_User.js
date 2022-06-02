const table = require('../models/User');

const new_User = async(dados,passCrypt)=>{
    await table.create({
        usuario:dados.user,
        senha: passCrypt,
        matricula: dados.mat
    });
};

module.exports = new_User;