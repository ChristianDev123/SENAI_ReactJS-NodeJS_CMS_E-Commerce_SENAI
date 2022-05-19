const mysql = require('mysql2');

const dbMysql = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'cms_crud'
});


module.exports = dbMysql;