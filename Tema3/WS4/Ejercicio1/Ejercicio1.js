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
5. Implementar s un m todo dibujar() que imprimir en pantalla el tablero para poder á é á
ser probado.*/


class Puzle{

    posicionBlanco = Array();

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
                    BLANCO = i,j;
                }else{
                    tablero[i][j] =numero;
                }
                

                numero++;
            }
        }
        return tablero;
    }
    
    buscarBlanco(tablero){
        for(let i = 0; i < tablero.length;i++){

            for(let j=0; j < tablero.length;j++){
                if(tablero[i][j]==null){
                    this.posicionBlanco[0]=i;
                    this.posicionBlanco[1]=j;
                    return this.posicionBlanco
                }
            }
        }
        return this.posicionBlanco
    }
    
    

    

    
    
}
Puzle=new Puzle(3);
console.log(Puzle.dibujar());