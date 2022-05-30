const Sequelize = require('sequelize')

const connectionDB = process.env.DATABASE_URL;

const sequelize = new Sequelize(connectionDB);

module.exports = sequelize;
