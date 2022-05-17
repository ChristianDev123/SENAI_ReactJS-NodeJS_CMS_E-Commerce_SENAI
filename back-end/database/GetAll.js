const Sequelize = require('sequelize');
const productTable = require('../models/Products');
const stockTable = require('../models/Stocks');

async function GetAllProducts(){
    const result = await stockTable.findAll({include:{model:productTable, as:'idProduct'}})
    // result
    // .then((response)=>console.log(response))
    console.log(result);
};

module.exports = GetAllProducts