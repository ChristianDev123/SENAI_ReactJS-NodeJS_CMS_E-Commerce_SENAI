const { Router } = require("express");
const rota = Router();
const Tabela = require("./controllers/Create_Table");
const user = require("./models/User");
const sequelize = require("sequelize");
const new_User = require("./controllers/Create_User");

var UserExists = true;

const VerificaUsuario = async (user) => {
  if (user === null) {
    return UserExists = false;
  }
  else {
    return UserExists = true;

  }
}
rota.post("/banco", async (req, res) => {
  const dados = req.body
  const Verifier = await user.findOne({
    where: {
      usuario: dados.user,
      senha: dados.pass,
      matricula: dados.mat
    },
  });

  VerificaUsuario(Verifier);

  if (UserExists == true) {
    res.send({ user: "True" })
    console.log("o usuario existe")
  }
  else {
    res.send({ user: "false" })
    console.log("o usuário não existe")
  }
});
rota.post("/inserir", async (req, res) => {
  const user = req.body;
  new_User(user)
  res.send({ mensagem: "Usuário cadastrado" });

});

module.exports = rota;
