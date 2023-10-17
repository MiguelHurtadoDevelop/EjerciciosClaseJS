var num_adivinar = prompt("Introduce el numero a adivinar")
var num = 0;
while(num != num_adivinar){

    num =  prompt("Introduce el numero")

    if(num > num_adivinar){
        alert("Es mayor")

    }else if(num < num_adivinar){
        alert("Es menor")
    }

}