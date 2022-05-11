const { Router } = require("express");
const rota = Router();
const Tabela = require('./database/Create_Table');
const user = require("./models/User");
const new_User = require('./database/Create_User');
const Verifier = require('./controllers/UsersVerifications');


rota.post("/banco",Verifier.Verification)

rota.get("/createBanco",Verifier.NewTable)

rota.post("/inserir",Verifier.NewUser)

module.exports = rota;
