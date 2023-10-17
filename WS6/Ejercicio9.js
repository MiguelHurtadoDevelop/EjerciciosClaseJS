var NColumnas = prompt("Introduce un numero de columnas");
var NFilas = prompt("Introduce un numero de filas");
var alto = prompt("Introduce el alto");
var ancho = prompt("Introduce el ancho");


document.write('<table border = "0" cellspacing = "2" bgcolor = "black" width = "200">');
for(var j=0 ; j < NFilas;j++){

document.write('<tr bgcolor = "white" height = "'+alto+'">');
    for (var i = 0; i < NColumnas; i++){
        
            document.write('<td width = "'+ancho+'"  >&nbsp;</td>');   
        

    }

document.write('</tr>')
}
document.write('</table>')