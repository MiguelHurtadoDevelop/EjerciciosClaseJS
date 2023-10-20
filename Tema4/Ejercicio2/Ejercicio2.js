//2. Captura el movimiento del ratón, para que se muestre la posición en la que se
//encuentra en cada momento.

window.onload=()=>{
    document.body.addEventListener("mousemove",posRaton)
}

function posRaton(MouseEvent){
    console.log(MouseEvent.clientX,MouseEvent.clientY)
}   