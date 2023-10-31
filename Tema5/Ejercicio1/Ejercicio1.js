window.onload = function () {
    enlaces = document.getElementsByTagName('a');
    console.log(enlaces.length);
    console.log(enlaces[enlaces.length - 2].href);
    var contador = 0;
    for(var i = 0; i < enlaces.length; i++){
        if(enlaces[i].href == "https://www.google.com/"){
            contador++;
        }
    }
    console.log(contador);
    var tecerparrafo = document.getElementsByTagName('p')[2];
    var enlacesparrafo = tecerparrafo.getElementsByTagName('a');
    console.log(enlacesparrafo.length);
}