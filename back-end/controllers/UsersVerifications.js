const new_User = require('../database/Create_User');
const user = require('../models/User');
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

class Verifications {
    
    static async Verification(req, res) {
        const dados = req.body
        let UserExists;
        const verifier = await user.findOne({
            where:{
                usuario: dados.user,
                matricula: dados.mat
            }
        });
        console.log(verifier)
        bcrypt.compare(dados.pass,verifier.senha,(err,answer)=>{
            if(err) console.log(err);
            UserExists = answer
        });
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
        
        res.status(status).send({ user: response })
    }
    
    static async NewUser(req,res) {
        const dado = req.body;
        const newPass = bcrypt.hashSync(dado.pass,salt); 
        new_User(dado,newPass);
        res.status(200).send({mensagem:"Usuario adicionado com sucesso!"});
    }

}
module.exports = Verifications;