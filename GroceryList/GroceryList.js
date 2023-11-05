window.onload = function(){
   
    var button = document.getElementById("enviar");

    button.addEventListener("click", function(event){
        var product = document.getElementById("product").value;
   
        mostrarProductos(product);
        
        product = document.getElementById("product").value = "";
        
        event.preventDefault();
    });
    var lista = document.getElementById("lista");
    lista.addEventListener("click", function(event){
        var target = event.target;

        if (target.classList.contains("editar")) {
            editarProducto(target.parentElement);
        } else if (target.classList.contains("borrar")) {
            lista.removeChild(target.parentElement);
        }
    });
    
    
}




function mostrarProductos(product) {
    var lista = document.getElementById("lista");
    var li = document.createElement("li");
    li.innerHTML = product;

    
    var editar = document.createElement("button");
    editar.innerHTML= "<img src='img/libro.png'></img>";
    
    editar.addEventListener("click", function() {
        li.innerHTML = "<input type='text'  id='product'> <button class='editar' type='submit'>Editar </button>";
    });
    
    li.appendChild(editar);

    
    var borrar = document.createElement("button");
    borrar.innerHTML= "<img src='img/papelera.png'></img>";
    
    borrar.addEventListener("click", function() {
        lista.removeChild(li);
    });
    
    li.appendChild(borrar);

    
    lista.appendChild(li);
}

function editarProducto(li) {
    var product = li.firstChild.value;
    li.innerHTML = product;
    
    var editar = document.createElement("button");
    editar.innerHTML= "<img src='img/libro.png'></img>";
    
    editar.addEventListener("click", function() {
        li.innerHTML = "<input type='text' value='' id='product'> <button class='editar' type='submit'>Editar </button>";
    });
    
    li.appendChild(editar);

    
    var borrar = document.createElement("button");
    borrar.innerHTML= "<img src='img/papelera.png'></img>";
    
    borrar.addEventListener("click", function() {
        lista.removeChild(li);
    });
    
    li.appendChild(borrar);

    
    lista.appendChild(li);
}