window.onload = function() {
    document.getElementById("usuario").addEventListener("input", validarRequisitos);
    document.getElementById("enviar").addEventListener("click", validarFormulario);
}

function validarRequisitos() {
    const usuario = document.getElementById("usuario").value;

    const lowerCase = document.getElementById("lowerCase");
    const upperCase = document.getElementById("upperCase");
    const sixMinimum = document.getElementById("sixMinimum");

    var contador = 0;

    if (/.*[a-z].*/.test(usuario)) {
        lowerCase.style.textDecoration = "line-through";
    } else {
        lowerCase.style.textDecoration = "none";
        contador++;
    }

    if (/.*[A-Z].*/.test(usuario)) {
        upperCase.style.textDecoration = "line-through";
    } else {
        upperCase.style.textDecoration = "none";
        contador++;
    }

    if (/^.{6,}$/.test(usuario)) {
        sixMinimum.style.textDecoration = "line-through";
    } else {
        sixMinimum.style.textDecoration = "none";
        contador++;
    }
    return contador;
}
function validarFormulario(event) {
    numeroErrores = validarRequisitos();
    if(numeroErrores > 0){
        event.preventDefault();
    }

}