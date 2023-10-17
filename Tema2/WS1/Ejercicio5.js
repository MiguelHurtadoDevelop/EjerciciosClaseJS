
function reloj()
{
    cont = new Date();
    document.getElementById("etiqueta").innerHTML = cont.getHours() + ":"+ cont.getMinutes()+":"+cont.getSeconds();
    setTimeout(reloj,1000)
}

setTimeout(reloj,1000)