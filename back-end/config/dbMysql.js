const {Client} = require('pg');

const client = new Client(process.env.DATABASE_URL);
const dbPostgres = client.connect();


module.exports = dbPostgres;