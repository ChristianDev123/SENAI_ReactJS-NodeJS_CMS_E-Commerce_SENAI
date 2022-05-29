const Sequelize = require('sequelize');
const stockTable = require('../models/Stocks');
const productTable = require('../models/Products');

async function newProduct(data){
    const resultProduct = await productTable.create({
        name:data.nameProduct,
        code:data.codeProduct,
        description:data.descProduct
    });
    const idProduct = resultProduct.idProduct;
    const resultStocks = await stockTable.create({
        size:data.sizeProduct,
        quantity:data.qtdProduct,
        unitValue:data.unitValue,
        id_product:idProduct
    });

};

module.exports = newProduct;