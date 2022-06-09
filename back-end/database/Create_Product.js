const StockTable = require('../models/Stocks');
const ProductTable = require('../models/Products');
const ImageTable = require("../models/Images");

async function newProduct(data,Image){
    let resultProduct;
    if(! await verifierProduct(data)){
        resultProduct = await ProductTable.create({
            name:data.nameProduct,
            code:data.codeProduct,
            description:data.descProduct
        });
    }else{
        resultProduct = await ProductTable.findOne({where:{
            name: data.nameProduct,
            code: data.codeProduct
        }});
    }

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

async function verifierProduct(data){
    const resultProduct = await ProductTable.findOne({where:{
        name: data.nameProduct,
        code: data.codeProduct
    }});
    return(resultProduct !== null?true:false)
}

module.exports = newProduct;