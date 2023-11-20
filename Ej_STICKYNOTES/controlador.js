window.onload = ()=>{
    //Empieza la aplicacion
    misNotas = new ListaNotas();

    //Mirar en localStorage si hay notas guardadas
    if(localStorage.getItem("notas")){
        misNotas.lista=JSON.parse(localStorage.getItem("notas"));
    }
    vista = new vistaNotas();
    //Cargar notas en la vista
    for(nota of misNotas.lista){
        vista.crearNota(nota,"app");
    }

    document.getElementById("buttonAltaNota").addEventListener("click", nuevaNota)
    document.getElementById("buttonBajaNota").addEventListener("click", borrarNota)
}



function nuevaNota(){
    console.log("Nueva nota");
    campoTitulo = document.getElementById("inputTitulo");
    campoTexto = document.getElementById("inputTexto");

    //Creo dato en el modelo
    misNotas.agregarNota(campoTitulo.value, campoTexto.value);

    //creo vista para ese dato del MODELO
    notaActual = misNotas.lista[misNotas.lista.length-1];
    vista.crearNota(notaActual,"app")


    borradoNota = document.getElementById(notaActual.id).getElementsByTagName("button")[0];
    borradoNota.addEventListener("click", borrarNota);

    //Actualizo localStorage
    actualizarLocalStorage();
}
function actualizarLocalStorage(){
    localStorage.setItem("notas", JSON.stringify(misNotas.lista));

}

function borrarNota(e){

    //borrar en modelo
    misNotas.eliminarNota(e.target.parentNode.id);
    //borrar en vista
    vista.borrarNota("app",e.target.parentNode);
    actualizarLocalStorage();
}