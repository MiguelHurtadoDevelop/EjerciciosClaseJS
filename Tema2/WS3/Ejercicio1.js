function invierteCAdena(cad_arg){
    var separarCadena = cad_arg.split("");
    var invertirCadena = separarCadena.reverse();
    var unircadena = invertirCadena.join("");

    return unircadena;
}

document.write(invierteCAdena("hola"))