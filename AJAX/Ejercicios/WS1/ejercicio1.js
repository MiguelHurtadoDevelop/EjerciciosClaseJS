window.onload = function(){
    url = 'https://apiv1.geoapi.es/comunidades?type=JSON&key=d1f017efeb19ea67b45756559e2ac78433f79f8ebd0035ff21edb1ce542669b6&sandbox';
    ajax(url, 1);

    
    
}



function ajax(url, tipoPeticioon){
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            mostrarDatos(this.responseText, tipoPeticioon);
          }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
}

function mostrarDatos(respuesta, tipoPeticioon){
    
   myParent = document.body;
   

    
    respuesta = JSON.parse(respuesta).data;
    if(tipoPeticioon == 1){
        select = document.createElement("select");
        select.setAttribute("id", "comunidades");
        for(i=0; i<respuesta.length; i++){
            option = document.createElement("option");
            option.value = respuesta[i].CCOM;
            option.text = respuesta[i].COM;
            select.appendChild(option);
        }
        select.addEventListener("change", function(){
            console.log(this.value);
            ajax('https://apiv1.geoapi.es/provincias?CCOM='+this.value+'&type=JSON&key=d1f017efeb19ea67b45756559e2ac78433f79f8ebd0035ff21edb1ce542669b6&sandbox', 2);
        });

    }else if(tipoPeticioon == 2){
        select = document.createElement("select");
        select.setAttribute("id", "provincias");
        for(i=0; i<respuesta.length; i++){
            option = document.createElement("option");
            option.value = respuesta[i].CPRO;
            option.text = respuesta[i].PRO;
            select.appendChild(option);
        }
    }
   

    myParent.appendChild(select);
}