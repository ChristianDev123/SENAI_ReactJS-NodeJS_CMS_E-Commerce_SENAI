const dbM = require("../config/dbMysql");
const products = require("../models/Products");

async function Get(request,result) {
  const query = `
    SELECT P.name, P.code, P.description,P.idProduct,P.updatedAt,
    S.size, S.quantity, S.unitValue
    FROM PRODUCTS AS P
    INNER JOIN STOCKS AS S 
    ON P.IDPRODUCT = S.ID_PRODUCT 
    WHERE name LIKE'${request.name}%' 
    OR code LIKE '${request.code}%'`;

  dbM.query(query, (error, response) => {
    if(error) throw error;
    if(response.length === 0) result.status(500).send('Nenhum dado encontrado');
    else result.status(200).json(response);
  });
}

module.exports = Get;
