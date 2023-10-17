var a = prompt("Introduce el primer indice");
var b =prompt("Introduce el segundo indice");
var c = prompt("Introduce el tercer indice");
    
    
    if(a>0){
    x1 = ((b*-1)+sqrt(b**2-4*a*c))/(2*a);
    x2 = ((b*-1)-sqrt(b**2-4*a*c))/(2*a);
    document.write("las dos posibles soluciones son " + x1+ " y " +x2 )
    }