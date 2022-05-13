const Sequelize = require('sequelize');
const stockTable = require('../models/Stocks');
const procuctTable = require('../models/Products');

async function newProduct(data){
    const resultProduct = await procuctTable.create({
        name:data.nameProduct,
        code:data.codeProduct,
        description:data.descProduct
    });
    const idProduct = resultProduct.idProducts;   
    const resultStocks = await stockTable.create({
        size:data.sizeProduct,
        quantity:data.qtdProduct,
        unitValue:data.unitValue,
        id_Product:idProduct
    });
    
    console.log(resultStocks);
};

module.exports = newProduct;