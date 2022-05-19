const Sequelize = require('sequelize');
const stockTable = require('../models/Stocks');
const productTable = require('../models/Products');

async function newProduct(data){
    const resultStocks = await stockTable.create({
        size:data.sizeProduct,
        quantity:data.qtdProduct,
        unitValue:data.unitValue,
    });
    const idStock = resultStocks.idStock;
    const resultProduct = await productTable.create({
        name:data.nameProduct,
        code:data.codeProduct,
        description:data.descProduct,
        id_stock:idStock
    });
};

module.exports = newProduct;