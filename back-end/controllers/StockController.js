const Sequelize = require('sequelize');
const db = require('../config/db');
const products = require('../models/Products');
const stocks = require('../models/Stocks');
const newProduct = require('../database/Create_Product');
const updateProject = require('../database/Modify_Product');
const GetAllProducts = require('../database/GetAll');
const DeleteProducts = require('../database/DeleteProduct')
const SearchGet = require('../database/getSearcher');

class StockControll {
    static async CreateTables(req,res){
        try{
            stocks.hasMany(products,{foreignKey:'id_stock'});
            products.belongsTo(stocks,{foreignKey:'id_stock'});
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
        GetAllProducts(res);
    }
    
    static async DeleteProduct(req,res){
        const arrDelete = req.body.arrToDelete 
        DeleteProducts(arrDelete,res);
    }

    static async SearchBarGet(req,res){
        const search = req.query;
        SearchGet(search,res);
    }
}

module.exports = StockControll;