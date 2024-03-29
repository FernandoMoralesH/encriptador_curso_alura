const mensajeInput = document.getElementById('mensaje');
const encriptadorBtn = document.getElementById('encriptar');
const desencriptadorBtn = document.getElementById('desencriptar');
const mensajeEncriptado = document.getElementById('encriptado');
const mensajeDesencriptado = document.getElementById('desencriptado');

encriptadorBtn.addEventListener('click', function() {
    const mensaje = mensajeInput.value;

    if (/[A-Z]/.test(mensaje)) {
    alert("El mensaje contiene letras mayúsculas, vuelve a escribir tu frase en minusculas");
    mensajeInput.value = '';
} else {
    console.log("El mensaje no contiene letras mayúsculas");
}

    // Obtener el valor del mensaje del input
    // Encriptar el mensaje
    const mensajeAEncriptar = encriptarMensaje(mensaje);

    // Mostrar el mensaje encriptado en el textarea
    mensajeEncriptado.value = mensajeAEncriptar;

    // Limpiar el campo de entrada
    mensajeInput.value = '';
});

desencriptadorBtn.addEventListener('click', function() {
    const mensaje = mensajeInput.value;

    if (/[A-Z]/.test(mensaje)) {
    alert("El mensaje contiene letras mayúsculas, vuelve a escribir tu frase en minusculas");
    mensajeInput.value = '';
} else {
    console.log("El mensaje no contiene letras mayúsculas");
}

    // Obtener el valor del mensaje del input
    // Encriptar el mensaje
    const mensajeAEncriptar = desencriptarMensaje(mensaje);

    // Mostrar el mensaje encriptado en el textarea
    mensajeDesencriptado.value = mensajeAEncriptar;

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

function desencriptarMensaje(mensaje) {

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
