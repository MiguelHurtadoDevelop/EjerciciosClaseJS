arraytablero = [[34,21,32,41,25], [14,42,43,14,31],[54,45,52,42,23],[33,15,51,31,35],[21,52,33,13,23]];

let posicionX= 0;
let posicionY = 0;

let posicion = arraytablero[posicionX][posicionY];


    
let Encontrado=false;
console.log("Empieza en la posicion ("+posicionX+", "+ posicionY+")")

    while(!Encontrado){
        posicionX = (Math.floor(posicion/10))-1; 
        posicionY = (posicion%10)-1;
        posicion = arraytablero[posicionX][posicionY];

        if(posicion == ((((posicionX+1)*10))+(posicionY+1))){
            Encontrado = true;
            console.log("Ha encontrado el tesoro en la posicion ("+posicionX+", "+ posicionY+")!")
        }else{
            console.log("Se encuentra en la posicion ("+posicionX+", "+ posicionY+") y no ha dado en el clavo")
        }
    }



