class Nota{
    constructor(titulo, texto, id){
        this.titulo = titulo;
        this.texto = texto;
        this.fechaCreacion = Date.now();
        this.id = id;
    }
}

class ListaNotas
{   
    idNota=0;
    constructor(){
        this.lista = [];
    }

    agregarNota(titulo,texto){
        this.lista.push(new Nota(titulo,texto,this.idNota++));
    }

    eliminarNota(indice){
         var posicion = this.localizaNota(indice);

        if(posicion >= -1){
            this.lista.splice(posicion,1);
        }
    }

    editarNota(indice,nuevoTitulo, nuevoTexto){
        var posicion = this.localizaNota(indice);

        if(posicion >= 0){
            this.lista[posicion].titulo = nuevoTitulo;
            this.lista[posicion].texto = nuevoTexto;
        }
    }

    //Devuelve la posicion en la que esta la nota con id
    //O -1 si no se encuentra
    localizaNota(indice){
        let i, encontrado = false;
        for(i=0; i<this.lista.length && !encontrado; i++){
            if(this.lista[i].id == indice){ 
                encontrado = true; 
                
            }
        }
        if(encontrado){
            return i-1;
        }
        else{
            return -1;
        }
    }
}