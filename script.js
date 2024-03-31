//Se generan las variables que guardaran los mensajes registrados, encriptados y desencriptados.
const mensajeInput = document.getElementById('mensaje');
const encriptadorBtn = document.getElementById('encriptar');
const desencriptadorBtn = document.getElementById('desencriptar');
const mensajeEncriptado = document.getElementById('encriptado');
const mensajeDesencriptado = document.getElementById('desencriptado');

/// Eventos Listener que ayudan a ejecutar las acciones de los botones encriptar, desencriptar, copiar y limpiar reGISTROS.
encriptadorBtn.addEventListener('click', function() {
    const mensaje = mensajeInput.value;
    //Se valida que no haya mayusculas:
    if (/[A-Z]/.test(mensaje)) {
    alert("El mensaje contiene letras mayúsculas, vuelve a escribir tu frase en minusculas");
    mensajeInput.value = '';
} else {
    console.log("El mensaje no contiene letras mayúsculas");
    const mensajeAEncriptar = encriptarMensaje(mensaje);
    mensajeEncriptado.value = mensajeAEncriptar;
    mensajeInput.value = '';
}
});

desencriptadorBtn.addEventListener('click', function() {
    const mensaje = mensajeInput.value;

    if (/[A-Z]/.test(mensaje)) {
    alert("El mensaje contiene letras mayúsculas, vuelve a escribir tu frase en minusculas");
    mensajeInput.value = '';
} else {
    console.log("El mensaje no contiene letras mayúsculas");
        const mensajeAEncriptar = desencriptarMensaje(mensaje);
    mensajeDesencriptado.value = mensajeAEncriptar;
    mensajeInput.value = '';
}
});

document.addEventListener('DOMContentLoaded', function () {
    var botonCopiarEncriptado = document.getElementById('copiarMensajeE');
    var textoACopiar = document.getElementById('encriptado');

    botonCopiarEncriptado.addEventListener('click', function () {
        textoACopiar.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Texto copiado al portapapeles');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var botonCopiarDesencriptado = document.getElementById('copiarMensajeD');
    var textoACopiar = document.getElementById('desencriptado');

    botonCopiarDesencriptado.addEventListener('click', function () {
        textoACopiar.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Texto copiado al portapapeles');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var botonLimpiar = document.getElementById('limpiarRegistro');

    botonLimpiar.addEventListener('click', function () {
        mensajeInput.value = '';
        mensajeEncriptado .value = '';
        mensajeDesencriptado .value = '';

    });
});

//Funciones, para encriptar, desencriptar y sustituir letras por medio de uso de ciclos for y while para encontrar las letras iguales y cambiarlas.
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

function sustituirCadena(mensaje, cadenaOriginal, cadenaNueva) {
    var nuevoMensaje = mensaje;
    var opcion = 0;

    while (opcion != 1) {
        var encontrado = false;

        for (var i = 0; i < nuevoMensaje.length - cadenaOriginal.length + 1; i++) {
            var subcadena = nuevoMensaje.slice(i, i + cadenaOriginal.length);

            if (subcadena === cadenaOriginal) {
                nuevoMensaje = nuevoMensaje.slice(0, i) + cadenaNueva + nuevoMensaje.slice(i + cadenaOriginal.length);
                console.log("Mensaje modificado:", nuevoMensaje);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log("El grupo de letras '" + cadenaOriginal + "' no se encontró en el mensaje.");
            opcion = 1;
            break;
        }
    }

    return nuevoMensaje;
}

function desencriptarMensaje(mensaje) {
    mensaje = sustituirCadena(mensaje, "ai", "a");
    mensaje = sustituirCadena(mensaje, "enter", "e");
    mensaje = sustituirCadena(mensaje, "imes", "i");
    mensaje = sustituirCadena(mensaje, "ober", "o");
    mensaje = sustituirCadena(mensaje, "ufat", "u");

    return mensaje;
}
