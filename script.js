const mensajeInput = document.getElementById('mensaje');
const encriptadorBtn = document.getElementById('encriptar');
const desencriptadoTextarea = document.getElementById('encriptado');
const newMensaje ="";

encriptadorBtn.addEventListener('click', function() {
    // Obtener el valor del mensaje del input
    const mensaje = mensajeInput.value;

    // Encriptar el mensaje (aquí puedes implementar tu lógica de encriptación)
    const mensajeEncriptado = encriptarMensaje(mensaje);

    // Mostrar el mensaje encriptado en el textarea
    desencriptadoTextarea.value = mensajeEncriptado;

    mensajeInput.value = '';
});

// Función de encriptación simple (solo para propósitos de demostración)
function encriptarMensaje(mensaje) {
    encriptado.value = '';
    // Aquí puedes implementar tu algoritmo de encriptación
    // Por ejemplo, aquí hay una encriptación simple de sustitución:
    return mensaje.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}