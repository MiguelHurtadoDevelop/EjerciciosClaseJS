fechaHoy = new Date();

fecha85 = new Date(fechaHoy);

fecha187 = new Date(fechaHoy);

document.write(fechaHoy +"<br>")

fecha85.setDate(fechaHoy.getDate()+85)

document.write(fecha85 +"<br>")

fecha187.setDate(fechaHoy.getDate()-187)

document.write(fecha187 + "<br>")

fecha85.setFullYear(fecha85.getFullYear()+2)

document.write(fecha85 +"<br>")

fecha187.setHours(fecha187.getHours()-24)

document.write(fecha187 + "<br>")

fecharesto = new Date(fecha85-fecha187);



document.write(fecharesto + "<br>")



