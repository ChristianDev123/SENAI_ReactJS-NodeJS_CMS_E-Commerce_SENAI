const StockTable = require('../models/Stocks');
const ProductTable = require('../models/Products');
const ImageTable = require("../models/Images");

async function newProduct(data,Image){
    const resultProduct = await ProductTable.create({
        name:data.nameProduct,
        code:data.codeProduct,
        description:data.descProduct
    });
    
    const idProduct = resultProduct.idProduct;
    
    const resultStocks = await StockTable.create({
        size:data.sizeProduct,
        quantity:data.qtdProduct,
        unitValue:data.unitValue,
        id_product:idProduct
    });
    
    const resultImage = await ImageTable.create({
        pathImage: Image,
        nameImage: Image,
        id_product: idProduct
    });
};

module.exports = newProduct;