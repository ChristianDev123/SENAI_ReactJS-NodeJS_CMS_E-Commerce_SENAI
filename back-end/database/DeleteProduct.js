const ProductTable = require("../models/Products");
const StockTable = require("../models/Stocks");
const ImageTable = require("../models/Images");

async function DeleteProducts(index,result) {
  try{
    await ProductTable.destroy({where: {idProduct: index}});
    await StockTable.destroy({where:{idStock:index}});
    await ImageTable.destroy({where:{id_product:index}});
    result.status(200).send('Items deletados com sucesso!');
  }catch(error){
    result.status(500).send("Erro ao deletar os items!");
  }
}

module.exports = DeleteProducts;
