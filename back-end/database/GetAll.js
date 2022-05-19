const dbM = require('../config/dbMysql');


async function GetAll(result){
    const query = "SELECT * FROM PRODUCTS AS P JOIN STOCKS AS S ON P.ID_STOCK = S.IDSTOCK";    
    let res = "" 
    dbM.query(query,(error,response)=>{
        result.status(200).json(response);
    })
}

module.exports = GetAll; 