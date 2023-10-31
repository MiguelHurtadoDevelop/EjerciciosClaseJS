window.onload = function () {
    btnAñadirMas = document.getElementById('añadirMas');
    btnEnviar = document.getElementById('enviar');
    btnAñadirMas.addEventListener('click', añadirMas);
    btnEnviar.addEventListener('click', enviar);
}

function enviar(){
    console.log("enviado")
}
function añadirMas(){
    input = document.getElementById('file');
    nuevoInput = document.createElement('input');
    nuevoInput= input.cloneNode(true);
    input.parentNode.appendChild(nuevoInput);
}
