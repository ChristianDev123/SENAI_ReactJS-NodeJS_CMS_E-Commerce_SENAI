const Sequelize = require('sequelize')

const connectionDB = process.env.DATABASE_URL;
    const sequelize = new Sequelize({
        connectionString: process.env.DATABASE_URL,
        ssl:{rejectUnauthorized: false}
    });

module.exports = sequelize;
