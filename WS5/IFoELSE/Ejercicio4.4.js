var NHermanos = prompt("Introduce El nº de hermanos");
var Cantidad = prompt("Introduce la cantidad");


if((NHermanos >= 3)){
    Cantidad = Cantidad/100*85
    document.write(Cantidad)
}else if (NHermanos < 3 && NHermanos > 1){
    Cantidad = Cantidad/100*95
    document.write(Cantidad)
}else if (NHermanos == 0){
    
    document.write(Cantidad)
}