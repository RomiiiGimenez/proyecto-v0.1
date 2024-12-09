const validarCampo = (evento) => {
    const cadena = evento.target.value;
    let patron;

    switch (evento.target.id) {
        case 'Nombre':
            patron = /^([a-zA-Z]\s?)+$/;
            if (!patron.test(cadena)) {
                alert("Este patron no es válido.");
            }
            break;

        case 'Telefono':
            patron = /^\d{3}\s\d{4}-\d{4}$/;
            if (!patron.test(cadena)) {
                alert("El número de teléfono no es válido.");
            }
            break;

        case 'Mensaje':
            patron = /^[\w\s.,!?¿¡()@'"-]{1,500}$/;
            if (!patron.test(cadena)) {
                alert("El mensaje contiene caracteres no permitidos o excede el límite de 500 caracteres.");
            }
            break;

        case 'Email':
            patron = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!patron.test(cadena)) {
                alert("El correo electrónico no es válido.");
            }
            break;

        default:
            break;
    }
};


const campos = document.querySelectorAll('#Nombre, #Telefono, #Mensaje, #Email');

campos.forEach(campo => {
    campo.addEventListener('input', validarCampo);
});