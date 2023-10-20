tiempoInicial = new Date();
window.onload=()=>{
    tiempoFinal= new Date();
    tiempoTranscurrido = (tiempoFinal - tiempoInicial) / 1000; 
    console.log(tiempoTranscurrido);
}
