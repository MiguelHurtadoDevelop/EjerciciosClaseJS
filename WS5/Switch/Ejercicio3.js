var Numero1 = prompt("Introduce un numero");
Numero1 = parseInt(Numero1)
var Numero2 = prompt("Introduce un numero");
Numero2 = parseInt(Numero2)
var Operacion = prompt("Introduce la oeración");


switch (Operacion){
    case "+":
        document.write(Numero1+Numero2);
        break;
    case "-":
        document.write(Numero1-Numero2);
        break;
    case "*":
        document.write(Numero1*Numero2);
        break;
    case "/":
        document.write(Numero1/Numero2);
            break;
    default:
        document.write("Operación no valida");
            break;
    }