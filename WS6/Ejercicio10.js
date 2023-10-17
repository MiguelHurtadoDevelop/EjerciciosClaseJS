
var altoYancho = prompt("Introduce el alto y el ancho");



document.write('<table border = "0" cellspacing = "2" bgcolor = "black" width = "200">');
for(var j=0 ; j < 8; j++){

document.write('<tr bgcolor = "white" height = "'+altoYancho+'">');
    for (var i = 0; i < 8; i++){
        
            document.write('<td width = "'+altoYancho+'"  >&nbsp;</td>');   
        

    }

document.write('</tr>')
}
document.write('</table>')