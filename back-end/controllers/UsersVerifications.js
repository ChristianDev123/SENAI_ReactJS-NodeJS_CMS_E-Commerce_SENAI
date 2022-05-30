const new_User = require('../database/Create_User');
const user = require('../models/User');

class Verifications {
    static async Verification(req, res) {
        const dados = req.body
        const verifier = await user.findOne({
            where:{
                usuario: dados.user,
                senha: dados.pass,
                matricula: dados.mat
            }
        });

        const UserExists = verifier == null ? false : true;

        let status;
        let response;
        let message;
        
        if(UserExists){
            status = 200;
            response = true;
            message = 'Usuário encontrado!'
        }else{
            status = 404;
            response = false;
            message = 'Usuário não encontrado!'
        }
        
        res.status(status).send({ user: response })
    }
    
    static async NewUser(req,res) {
        const dado = req.body;
        new_User(dado);
        res.status(200).send({mensagem:"Usuario adicionado com sucesso!"});
    }
}
module.exports = Verifications;