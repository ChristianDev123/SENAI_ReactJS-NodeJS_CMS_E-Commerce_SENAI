const sequelize = require('sequelize');
const Table = require('../database/Create_Table');
const new_User = require('../database/Create_User');
const user = require('../models/User');
var UserExists = true;

class Verifications {
    static async Verification(req, res) {
        async function VerificaUsuario(user){
            if (user === null) {
                return UserExists = false;
            }
            else {
                return UserExists = true;
            }
        }
        const dados = req.body
        const Verifier = await user.findOne({
            where: {
                usuario: dados.user,
                senha: dados.pass,
                matricula: dados.mat
            },
        });
        VerificaUsuario(Verifier);
        if(UserExists == true){
            res.status(200).send({ user: "True" })
            console.log("o usuario existe")
        }
        else{
            res.status(404).send({ user: "false" })
            console.log("o usuário não existe")
        }
    }
    
    static async NewTable(req, res) {
        Table();
        res.status(200).send({ mensagem: "tabela 'User' criada com sucesso!" })
    }
    
    static async NewUser(req,res) {
        const dado = req.body;
        new_User(dado);
        res.status(200).send({mensagem:"Usuario adicionado com sucesso!"});
    }
}
module.exports = Verifications;