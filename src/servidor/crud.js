const conexion = require('./bbdd.js');

exports.enviar = (req, res)=> {
    const datos = req.body;
    const {nombre, telefono, email, mensaje} = datos;

    let muestra;

    const buscar = `SELECT * FROM contacto WHERE telefono = ${telefono};`;
    conexion.query(buscar, (err, registros)=>{
        if(err){
            throw err;
        }else if(registros.length > 0){
            muestra = "No puede volver a enviar el formulario";
            res.render('index',{muestra})
        }else{
            const insertar = `INSERT INTO contacto (nombre, telefono, email, mensaje) VALUES ('${nombre}','${telefono}', '${email}', '${mensaje}')`
            conexion.query(insertar, (err)=>{
                if(err){
                    throw err;
                }else{
                        muestra = "Formulario enviado con exito!! "
                        res.render('index', {muestra})
                }
            })
          
        }
    });
};

exports.actualizar = (req,res)=>{
    const datos = req.body;
    const {nombre,telefono,email,mensaje,id} = datos;

    let muestra; 
    const modifica = `UPDATE contacto SET Nombre = '${nombre}', Telefono = '${telefono}', Email = '${email}', Mensaje = '${mensaje}' WHERE idContacto = '${id}'`;
    conexion.query(modifica, (err)=>{
        if(err){
            throw err;
        }else{
            muestra = 'Datos modificados con Exito!'
            res.render('index',{muestra})

        };
    })
}