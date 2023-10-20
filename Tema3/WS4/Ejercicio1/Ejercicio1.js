/*1) Puzzle. Se desea implementar una web para la realizaci n de puzzles. Un puzzle no es ó
m s que un tablero cuadrado con un hueco que podemos mover y que permite á
reordenar las piezas. Se pide por tanto la implementaci n de una clase que represente ó
este juego teniendo en cuenta:
1. La dimension puede variar, se escogera en la creacion.
2. El espacio en blanco solo se mueve arriba, abajo, izquierda, derecha, controlando 
por supuesto que sea un movimiento valido. 
3. Debe llevarse un control del tiempo m nimo para resolverlo, as como el n mero de í í ú
movimientos realizados.
4. Los tableros se generar n aleatoriamente. á
5. Implementar un metodo dibujar() que imprimir en pantalla el tablero para poder 
ser probado.*/


class Puzle{

    

    constructor(dimension){
        this.dimension = dimension;
        this.tablero = this.crearTablero(this.dimension);
        this.solucion = this.crearSolucion(this.tablero);
        this.tableroBarajado = this.barajar(this.solucion);
        this.posicionBlanco = this.buscarBlanco(this.tableroBarajado)
    }


    crearTablero(dimension){
        var tablero = new Array(dimension);
        for (let i= 0; i < dimension ; i++){
            tablero[i] = new Array(dimension);
        }
        return tablero;
    }

    crearSolucion(tablero){
        var numero=1;
        for(let i = 0; i < tablero.length;i++){

            for(let j=0; j < tablero.length;j++){
                if(i==tablero.length-1 && j==tablero.length-1){
                    tablero[i][j] = null;
                    
                }else{
                    tablero[i][j] =numero;
                }
                

                numero++;
            }
        }
        return tablero;
    }
    
    barajar(solucion){
        var tableroBarajado = this.solucion.map(row => [...row]);
        var numeroAleatorio;
        var aux;
        for(let i = 0; i < tableroBarajado.length;i++){

            for(let j=0; j < tableroBarajado.length;j++){
                numeroAleatorio = Math.floor(Math.random() * (tableroBarajado.length));
                aux = tableroBarajado[i][j];
                tableroBarajado[i][j] = tableroBarajado[numeroAleatorio][numeroAleatorio];
                tableroBarajado[numeroAleatorio][numeroAleatorio] = aux;
            }
        }
        return tableroBarajado;

    }
            
    buscarBlanco(tableroBarajado){
        var posicionBlanco = new Array(2);
        for(let i = 0; i < tableroBarajado.length;i++){

            for(let j=0; j < tableroBarajado.length;j++){
                if(tableroBarajado[i][j] == null){
                    posicionBlanco[0] = i;
                    posicionBlanco[1] = j;
                }
            }
        }
        return posicionBlanco;
    }
    
    
    

    moverArriba() {
        if (this.posicionBlanco[0] > 0) {
            this.tableroBarajado[this.posicionBlanco[0]][this.posicionBlanco[1]] = this.tableroBarajado[this.posicionBlanco[0] - 1][this.posicionBlanco[1]];
            this.tableroBarajado[this.posicionBlanco[0] - 1][this.posicionBlanco[1]] = null;
            this.posicionBlanco[0] = this.posicionBlanco[0] - 1;
        }
    }
    
    moverAbajo() {
        if (this.posicionBlanco[0] < this.tableroBarajado.length - 1) {
            this.tableroBarajado[this.posicionBlanco[0]][this.posicionBlanco[1]] = this.tableroBarajado[this.posicionBlanco[0] + 1][this.posicionBlanco[1]];
            this.tableroBarajado[this.posicionBlanco[0] + 1][this.posicionBlanco[1]] = null;
            this.posicionBlanco[0] = this.posicionBlanco[0] + 1;
        }
    }
    
    moverIzquierda() {
        if (this.posicionBlanco[1] > 0) {
            this.tableroBarajado[this.posicionBlanco[0]][this.posicionBlanco[1]] = this.tableroBarajado[this.posicionBlanco[0]][this.posicionBlanco[1] - 1];
            this.tableroBarajado[this.posicionBlanco[0]][this.posicionBlanco[1] - 1] = null;
            this.posicionBlanco[1] = this.posicionBlanco[1] - 1;
        }
    }
    
    moverDerecha() {
        if (this.posicionBlanco[1] < this.tableroBarajado.length - 1) {
            this.tableroBarajado[this.posicionBlanco[0]][this.posicionBlanco[1]] = this.tableroBarajado[this.posicionBlanco[0]][this.posicionBlanco[1] + 1];
            this.tableroBarajado[this.posicionBlanco[0]][this.posicionBlanco[1] + 1] = null;
            this.posicionBlanco[1] = this.posicionBlanco[1] + 1;
        }
    }

    moverSegunDireccion(direccion) {
        if (direccion === "arriba") {
            this.moverArriba();
        } else if (direccion === "abajo") {
            this.moverAbajo();
        } else if (direccion === "izquierda") {
            this.moverIzquierda();
        } else if (direccion === "derecha") {
            this.moverDerecha();
        } else {
            console.log("Dirección no válida");
        }
    }

    dibujar(tablero) {
       
        console.log("Tablero:");
        for (let i = 0; i < tablero.length; i++) {
            console.log(tablero[i].join("\t"));
        }
    }
    
    
    sonIguales(tablero1, tablero2) {
       
        for (let i = 0; i < tablero1.length; i++) {
            for (let j = 0; j < tablero1[i].length; j++) {
                if (tablero1[i][j] !== tablero2[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    
    

    pedirDireccion() {

        const direccion = prompt("Ingresa la dirección del movimiento (arriba/abajo/izquierda/derecha):");
        return direccion.toLowerCase();
    }

    jugar() {

        var tableroActual = this.tableroBarajado.map(row => [...row]);
        var tiempoInicial = new Date();

        let movimientos = 0;

        while (!this.sonIguales(this.solucion, tableroActual)) {
            console.clear(); 

            this.dibujar(tableroActual);
            
            const direccion = this.pedirDireccion();
            
            this.moverSegunDireccion(direccion);
            movimientos++;

            
            tableroActual = this.tableroBarajado.map(row => [...row]);
        }

        tiempoFinal = new Date();
        tiempoTranscurrido = (tiempoFinal - tiempoInicial) / 1000; 

        console.clear(); 
        this.dibujar(this.tableroBarajado);
        console.log(`¡Has resuelto el puzle en ${movimientos} movimientos y ${tiempoTranscurrido} segundos!`);
    }
    

    
    
}
Puzle=new Puzle(3);
console.log(Puzle.jugar());