const Sequelize = require('sequelize')

const connectionDB = process.env.DATABASE_URL;

const sequelize = new Sequelize(connectionDB);
console.log("leu isso")

module.exports = sequelize;
