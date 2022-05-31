const {Pool} = require('pg');

const Client = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:{rejectUnauthorized: false}
});

async function GetAll(result){
    const query = `
        SELECT * FROM "Products" AS p
        LEFT JOIN "Stocks" AS s 
        ON p."idProduct" = s."id_product"
        LEFT JOIN "images" AS i
        ON p."idProduct" = i."id_product"    
    `;
    Client.query(query,(error,response)=>{
        if(error) result.status(500).send("Falha ao coletar os dados");
        result.status(200).json(response.rows);
        Client.end();
    })
}

module.exports = GetAll; 