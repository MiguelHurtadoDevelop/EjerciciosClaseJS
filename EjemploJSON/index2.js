var modeloDatos={
    "notas":[]
}

window.onload = () =>
{
    //Definir eventos
    document.getElementById('boton').addEventListener("click",nuevaNota);


    //Leer el localStorage
    if(window.localStorage.getItem('notas')){
        console.log('Hay notas');
        modeloDatos=JSON.parse(window.localStorage.getItem('notas'));
        mostrarNotas(modeloDatos.notas);
    }
    else{
        console.log('No hay notas');
    }
}

function nuevaNota(){
    textoNota= document.getElementById('input').value;
    document.getElementById('input').value="";
    //creo objeto nota
    fecha =new Date();
    objetoNota={   
        "texto":textoNota,
        "fecha":fecha
    };
    modeloDatos.notas.push(objetoNota);
    //Actualizo localStorage
    window.localStorage.setItem('notas',JSON.stringify(modeloDatos));
    mostrarNotas(modeloDatos.notas);
    
}

function mostrarNotas(arrayNotas){
    lista = document.getElementById('lista');
    lista.innerHTML="";
    for(nota of arrayNotas){
        li = document.createElement('li');
        li.innerHTML=nota.texto+" "+nota.fecha;
        lista.appendChild(li);
    }
}