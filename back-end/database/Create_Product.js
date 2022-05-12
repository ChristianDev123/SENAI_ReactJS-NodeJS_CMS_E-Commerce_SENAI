const Sequelize = require('sequelize');
const stockTable = require('../models/Stocks');
const procuctTable = require('../models/Products');

async function newProduct(data){
    const resultStocks = await stockTable.create({
        size:data.sizeProduct,
        quantity:data.qtdProduct,
        unitValue:data.unitValue
    });
    console.log(resultStocks.idStock);
    const resultProduct = await procuctTable.create({
        name:data.nameProduct,
        code:data.codeProduct,
        id_stock:resultStocks.idStock
    });
    console.log(resultProduct);
};

module.exports = newProduct;