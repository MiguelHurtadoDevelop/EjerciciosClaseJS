//1. Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert

window.onload=()=>{
    document.body.addEventListener("click",tirarAlert)
}

function tirarAlert(){
    alert("Has hecho click")
}   