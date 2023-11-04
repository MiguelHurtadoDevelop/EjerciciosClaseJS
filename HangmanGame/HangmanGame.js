window.onload = function() {
    jugar();
    
}

function jugar() {
    var palabras = ["manzana", "platano", "cereza", "datil", "frambuesa", "higo", "uva", "sandia", "kiwi", "limon"];
    var solucion = palabras[Math.floor(Math.random() * palabras.length)];
    var longitudSolucion = solucion.length;
    var vidas = 10;

    var solucionBlanco = document.getElementById("solucion");
    solucionBlanco.innerHTML = ""; 

    for (var i = 0; i < longitudSolucion; i++) {
        var letra = document.createElement("span");
        letra.innerHTML = "_ ";
        solucionBlanco.appendChild(letra);
    }
    var mensaje = document.getElementById("mensaje");
    var jugarDeNuevoButton = document.getElementById("jugarDeNuevo");
    var imagen = document.getElementById("imagen"); 

    var botones = document.getElementById("buttons");
    var botonesArray = botones.getElementsByTagName("button");
    for (var i = 0; i < botonesArray.length; i++) {
        botonesArray[i].disabled = false;
    }
   
    
    botones.addEventListener("click", function(e) {
        
        var letra = e.target.innerHTML;
        e.target.disabled = true;

        var respuesta = "";
        for (var i = 0; i < solucion.length; i++) {
            if (solucion[i] === letra) {
                solucionBlanco.children[i].innerHTML = letra;
            }else{
                vidas--;
            }
        }

        for (var i = 0; i < solucionBlanco.children.length; i++) {
            respuesta += solucionBlanco.children[i].innerHTML;
        }
        if(respuesta === solucion) {
            mensaje.innerHTML = "Has ganado";
            document.body.style.backgroundColor = "green"; 
            jugarDeNuevoButton.style.display = "block";
        }
        if (vidas === 0) {
            mensaje.innerHTML = "Has perdido";
            document.body.style.backgroundColor = "red"; 
            jugarDeNuevoButton.style.display = "block"; 
    
            
        }
        
    });

    jugarDeNuevoButton.addEventListener("click", function() {
        vidas = 10;
        mensaje.innerHTML = "";
        document.body.style.backgroundColor = "white"; 
        jugarDeNuevoButton.style.display = "none"; 
        
        jugar();
    });
}



