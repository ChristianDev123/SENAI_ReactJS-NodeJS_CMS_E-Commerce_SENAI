const new_User = require('../database/Create_User');
const user = require('../models/User');
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

class Verifications {
    
    static async Verification(req, res) {
        const dados = req.body
        
        const verifier = await user.findOne({
            where:{
                usuario: dados.user,
                matricula: dados.mat
            }
        });
        
        const UserExists = await bcrypt.compare(dados.pass,verifier.senha);

        let status;
        let response;
        let message;
        
        if(UserExists){
            status = 200;
            response = true;
            message = 'Usuário encontrado!'
        }else{
            status = 500;
            response = false;
            message = 'Usuário não encontrado!'
        }
        
        res.status(status).json({ user: response, message:message })
    }
    
    static async NewUser(req,res) {
        const dado = req.body;
        const newPass = bcrypt.hashSync(dado.pass,salt); 
        new_User(dado,newPass);
        res.status(200).send({mensagem:"Usuario adicionado com sucesso!"});
    }

}
module.exports = Verifications;