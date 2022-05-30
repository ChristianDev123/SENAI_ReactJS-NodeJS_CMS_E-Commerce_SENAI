const {Client} = require('pg');

const client = new Client(process.env.DATABASE_URL);
const dbPostgres = client.connect();

console.log(process.env.DATABASE_URL);

module.exports = dbPostgres;