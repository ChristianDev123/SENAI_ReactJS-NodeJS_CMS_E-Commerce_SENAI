const Sequelize = require('sequelize')

const connectionDB = process.env.DATABASE_URL;

let sequelize;
if(connectionDB){
    sequelize = new Sequelize(process.env.DATABASE_URL,{dialect:"postgres"});
}else{
    sequelize = new Sequelize('cms_crud','root','',{dialect:'mysql',host:'localhost',port:3306});
}

module.exports = sequelize;
