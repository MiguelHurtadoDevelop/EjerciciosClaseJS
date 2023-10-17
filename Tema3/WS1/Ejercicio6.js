var base = 0;
var Exponente = 0;

function potenciasRec(base,Exponente){

    if(Exponente == 0){
        return 1;
    }else{
        return base * potenciasRec(base, Exponente - 1) 
    }

}

console.log(potenciasRec(3,5))