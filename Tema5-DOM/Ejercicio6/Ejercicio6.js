window.onload = function(){
    var siguiente = document.getElementById("siguiente");
    var anterior = document.getElementById("anterior");

    siguiente.addEventListener("click", siguienteImagen);
    anterior.addEventListener("click", anteriorImagen);
}
numeroImagen = 1;
function siguienteImagen(){
    numeroImagen++;
    if(numeroImagen > 3){
        numeroImagen = 1;
    }
    
   var imagen = document.getElementById("imagen");
    imagen.src = "img/imagen"+numeroImagen+".jpg";
    
}
function anteriorImagen(){
    numeroImagen--;
    if(numeroImagen < 1){
        numeroImagen = 3;
    }
    
    var imagen = document.getElementById("imagen");
    imagen.src = "img/imagen"+numeroImagen+".jpg";
}