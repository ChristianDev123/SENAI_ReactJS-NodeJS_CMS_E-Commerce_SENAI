const stockTable = require('../models/Stocks');
const productTable = require('../models/Products');

async function modifyProduct(data){
    let status = false;
    try{
        let changeStock;

        const changeProduct = await productTable.update({
            name:data.nameProduct,
            code:data.newCodeProduct,
            description:data.descProduct,
        },{where:{code:data.currentCodeProduct}})

        const findIdProduct = await productTable.findOne({where:{code:data.newCodeProduct}});
        
        if(await verifierStock(findIdProduct.idProduct, data.sizeProduct)){
            changeStock = await stockTable.update({
                size:data.sizeProduct,
                quantity:data.qtdProduct,
                unitValue:data.unitValue,
            },{where:{
                id_product:findIdProduct.idProduct,
                size:data.sizeProduct
            }});
            status = true;
        }
    }catch(err){
        console.log(err);
    }
    return status;
};

async function verifierStock(foreignKey, size){
    const resultStock = await stockTable.findOne({where:{
        id_product:foreignKey,
        size:size
    }});
    return(resultStock !== null?true:false);
}

module.exports = modifyProduct;