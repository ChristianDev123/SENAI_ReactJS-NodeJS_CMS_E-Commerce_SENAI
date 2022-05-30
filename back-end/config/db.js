const Sequelize = require('sequelize')

const connectionDB = process.env.DATABASE_URL;
    const sequelize = new Sequelize(connectionDB,{
        ssl:{rejectUnauthorized: false},
        dialect:"postgres"
    });
    console.log(connectionDB)
module.exports = sequelize;
