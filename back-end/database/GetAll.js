const dbM = require('../config/dbMysql');


async function GetAll(result){
    const query = "SELECT * FROM STOCKS AS S JOIN PRODUCTS AS P ON P.IDPRODUCT = S.ID_PRODUCT";    
    dbM.query(query,(error,response)=>{
        if(error) result.status(500).send("Falha ao coletar os dados");
        result.status(200).json(response);
    })
}

module.exports = GetAll; 