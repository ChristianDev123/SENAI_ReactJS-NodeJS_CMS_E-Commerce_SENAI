const { Router } = require("express");
const rota = Router();
const Verifier = require("./controllers/UsersVerifications");
const StockControll = require("./controllers/StockController");
const newProduct = require('./database/Create_Product')
const UpdateImg = require("./middlewares/UpdateImg");

let ObjBody = {};

rota.get("/createstocktable", StockControll.CreateTables);

rota.get("/all", StockControll.SelectAll);

rota.get("/searchbar", StockControll.SearchBarGet);

rota.post("/userverification", Verifier.Verification);

rota.post("/newuser", Verifier.NewUser);

rota.post("/newProduct", UpdateImg.single("image"), async(req, res) => {
    ObjBody = await req.body;
    res.status(200).send({confirmation:true});
});

rota.put("/updateProduct", StockControll.UpdateProduct);

rota.delete("/deleteProducts/:id", StockControll.DeleteProduct);

rota.post("/Uploadimage", UpdateImg.single("image"), async (req, res) => {
    const image = req.file.filename;
    const caminhoImg = req.file.path;
    newProduct(ObjBody,image);
    res.status(200).send('Item registrado com sucesso!');
});

module.exports = rota;