const ProductTable = require("../models/Products");
const StockTable = require("../models/Stocks");

async function DeleteProducts(arrDelete,result) {
  arrDelete.forEach(async (index) => {
    const resultProduct = await ProductTable.destroy({where: {idProduct: index}});
    const resultStock = await StockTable.destroy({where:{idStock:index}});
    if(resultProduct !== 0 && resultStock !== 0){
      result.status(200).send('Items deletados com sucesso!')
    }else{
      result.status(500).send('Falha ao deletar os items.');
    }
  });
}

module.exports = DeleteProducts;
