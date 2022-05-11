const sequelize = require('sequelize');
const database = require("../config/db");
const user = require("../models/User");

const Table = async () => {
      try{
            const resultado = await user.sync({ force:true});
            console.log(resultado);
      }catch(error){
            console.log("o erro foi" + error);
      };
};

module.exports = Table;