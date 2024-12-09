const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'cocina',
    user: 'root',
    password: 'root'
});

conexion.connect((err)=>{
    if(err){
        throw err;
    } else {
        console.log("Conexion a la BBDD exitosa!!");
    }
});

module.exports = conexion;