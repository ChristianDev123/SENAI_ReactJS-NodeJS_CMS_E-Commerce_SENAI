const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
});

// const sequelize = new Sequelize({
//   database:"TesteLocal",
//   dialect:"postgres",
//   port:5433,
//   username:"postgres",
//   password:"123"
// });

module.exports = sequelize;
