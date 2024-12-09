const express = require('express');
const mysql = require('mysql2');


const app = express();


app.use(express.static('dist'));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', require('./router'));

app.listen(3006,()=>{
    console.log("El servidor local es: http://localhost:3006");
})