var suma = 0;

for(let i = 0; i < 10;i++){
    var Numero = prompt("Introduce un numero");
    Numero = parseInt(Numero);
    suma = suma + Numero;
}

document.write(suma)