const validarCampo = (evento) => {
    const cadena = evento.target.value;
    let patron;

    switch (evento.target.id) {
        case 'nombre':
            patron = /^([a-zA-Z]\s?)+$/;
            if (!patron.test(cadena)) {
                alert("Este patron no es válido.");
            }
            break;

        case 'telefono':
            patron = /^[0-9][-|\s]?[0-9]*[-|\s]?[0-9]*$/;
            if (!patron.test(cadena)) {
                alert("El número de teléfono no es válido.");
            }
            break;

        case 'mensaje':
            patron = /^[\w\s.,!?¿¡()@'"-]{1,500}$/;
            if (!patron.test(cadena)) {
                alert("El mensaje contiene caracteres no permitidos o excede el límite de 500 caracteres.");
            }
            break;

        case 'email':
            patron = /^[a-zA-Z0-9._%+-]*@?[a-zA-Z0-9.-]*\.?[a-zA-z]*$/;
            if (!patron.test(cadena)) {
                alert("El correo electrónico no es válido.");
            }
            break;

        default:
            break;
    }
};


const campos = document.querySelectorAll('#nombre, #telefono, #mensaje, #email');

campos.forEach(campo => {
    campo.addEventListener('input', validarCampo);
});