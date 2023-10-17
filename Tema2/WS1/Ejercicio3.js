
var i = 60

function contador(){
    
    document.getElementById("etiqueta").innerHTML = i;
    i--
    if(i > 0){
        setTimeout(contador,1000)
    }
    

}

setTimeout(contador,1000)