const Sequelize = require('sequelize')

const connectionDB = process.env.DATABASE_URL;
    const sequelize = new Sequelize(process.env.DATABASE_URL,{
        ssl:{rejectUnauthorized: false},
        dialect:"postgres"
    });

module.exports = sequelize;
