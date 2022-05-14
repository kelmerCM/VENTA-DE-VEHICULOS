const sequelize = require('sequelize');

const DB_NAME = 'db_ventavehiculos_node';

const DB_USER = 'root';

const DB_PASS = '12345678';



export const database = new sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
    {
        host:'localhost',
        dialect: 'mysql',
        port: 3306
    }

);
database.sync({force: true})
.then(function () {
    console.log('Bases de datos creadas correctamente... !!!');


});