const Sequelize = require('sequelize');
const db = require('../config/db');
const stockTable = require('../models/Stocks');
const procuctTable = require('../models/Products');
const newProduct = require('../database/Create_Product');

class StockControll {
    static async CreateTables(req,res){
        try{
            procuctTable.belongsTo(stockTable,{
                constraint:true,
                foreignKey:'id_stock',
                allowNull:false
            });
            const result = await db.sync({force:true});
            res.status(200).send('<h2>Tabelas "Products" e "Stocks" foram criadas com êxito!<h2>');
            console.log(result);
        }catch(err){
            console.log(err);
            res.status(500).send('<h2>Erro ao tentar criar as tabelas "Products" e "Stocks"!</h2>');
        };
    }

    static async NewProduct(req,res){
        const objBody = req.body;
        newProduct(objBody);
        res.status(200).send('<h2>Item registrado com sucesso!</h2>');
    }
}

module.exports = StockControll;