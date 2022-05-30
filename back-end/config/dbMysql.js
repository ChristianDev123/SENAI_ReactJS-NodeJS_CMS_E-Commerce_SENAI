const {Client} = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl:{rejectUnauthorized: false}
});

const dbPostgres = client.connect();

module.exports = dbPostgres;