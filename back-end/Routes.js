const { Router } = require("express");
const rota = Router();
const Verifier = require('./controllers/UsersVerifications');
const StockControll = require('./controllers/StockController');

rota.get("/createusertable",Verifier.NewTable)

rota.get('/createstocktable',StockControll.CreateTables)

rota.post("/userverification",Verifier.Verification)

rota.post("/newuser",Verifier.NewUser)

rota.post('/newproduct',StockControll.NewProduct)



module.exports = rota;
