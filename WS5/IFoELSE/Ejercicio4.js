var Numero = prompt("Introduce el numero");
parseInt(Numero);


if(Numero > 100){
    var descuento = Numero/100*15;
    
    document.write(Numero-descuento);
}else{
    document.write("No hay descuento")
}