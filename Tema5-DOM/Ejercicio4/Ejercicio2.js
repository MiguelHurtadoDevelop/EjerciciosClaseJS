window.onload = function () {
    btn = document.getElementById('boton');
    btn.addEventListener('click', introducirTexto);
}

function introducirTexto(){
    lista = document.getElementById('lista');
    nuevoLI = document.createElement('li');
    nuevoLI.innerHTML = "holi";
    lista.appendChild(nuevoLI);
}