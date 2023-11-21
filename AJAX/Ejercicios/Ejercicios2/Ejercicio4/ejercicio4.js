
window.onload=()=>{
  inputUsuario=document.getElementById("usuario");
  

  inputUsuario.addEventListener("input", comprobarNombre)
}

function comprobarNombre(){
  var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML = this.responseText;
          console.log(this.responseText)
          }
      };
      xhttp.open("GET", "ejercicio4.php?usuario="+inputUsuario.value, true);
      xhttp.send();
}