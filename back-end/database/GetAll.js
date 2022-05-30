const dbM = require('../config/dbMysql');


async function GetAll(result){
    const query = `
        SELECT * FROM PRODUCTS AS P
        LEFT JOIN STOCKS AS S 
        ON P.IDPRODUCT = S.ID_PRODUCT
        LEFT JOIN IMAGES AS I
        ON P.IDPRODUCT = I.ID_PRODUCT
        `;    
    dbM.query(query,(error,response)=>{
        if(error) result.status(500).send("Falha ao coletar os dados");
        result.status(200).json(response.rows);
        dbM.end();
    })
}

module.exports = GetAll; 