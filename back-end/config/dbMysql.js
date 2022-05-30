const {Client} = require('pg');

const client = new Client();
const dbPostgres = client.connect(process.env.DATABASE_URL);


module.exports = dbPostgres;