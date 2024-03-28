const mensajeInput = document.getElementById('mensaje');
const encriptadorBtn = document.getElementById('encriptar');
const mensajeEncriptado = document.getElementById('encriptado');

encriptadorBtn.addEventListener('click', function() {
    // Obtener el valor del mensaje del input
    const mensaje = mensajeInput.value;

    // Encriptar el mensaje
    const mensajeAEncriptar = encriptarMensaje(mensaje);

    // Mostrar el mensaje encriptado en el textarea
    mensajeEncriptado.value = mensajeAEncriptar;

    // Limpiar el campo de entrada
    mensajeInput.value = '';
});

function encriptarMensaje(mensaje) {
    var nuevoMensaje = "";

    for (var i = 0; i < mensaje.length; i++) {
        var letra = mensaje[i];
        if (letra === 'a') {
            nuevoMensaje += 'ai';
        } else if (letra === 'e') {
            nuevoMensaje += 'enter';
        } else if (letra === 'i') {
            nuevoMensaje += 'imes';
        } else if (letra === 'o') {
            nuevoMensaje += 'ober';
        } else if (letra === 'u') {
            nuevoMensaje += 'ufat';
        } else {
            nuevoMensaje += letra;
        }
    }

    return nuevoMensaje;
}
