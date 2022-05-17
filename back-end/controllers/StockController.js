const Sequelize = require('sequelize');
const db = require('../config/db');
const newProduct = require('../database/Create_Product');
const updateProject = require('../database/Modify_Product');
const GetAllProducts = require('../database/GetAll');
const products = require('../models/Products');
const stocks = require('../models/Stocks');
class StockControll {
    static async CreateTables(req,res){
        try{
            // products.associate = (models)=>{products.belongsTo(models.Stocks,{foreignKey:'id_Product'})}
            stocks.belongsTo(products,{foreignKey:'id_Product', as:'id__Product'});
            products.hasMany(stocks,{foreignKey:'id_Product', as:"id_Product"});
            const result = await db.sync({force:true});
            res.status(200).send('<h2>Tabelas "Products" e "Stocks" foram criadas com êxito!<h2>');
        }catch(err){
            console.log(err);
            res.status(500).send('<h2>Erro ao tentar criar as tabelas "Products" e "Stocks"!</h2>');
        };
    }

    static async NewProduct(req,res){
        const objBody = req.body;
        newProduct(objBody);
        res.status(200).send('Item registrado com sucesso!');
    }

    static async UpdateProduct(req,res){
        const objBody = req.body;
        updateProject(objBody)
        res.status(200).send('Modificação realizada com sucesso!')
    }

    static async SelectAll(req,res){
        GetAllProducts();
        res.status(200).send('Todos os registro foram enviados com sucesso!');
    }
}

module.exports = StockControll;