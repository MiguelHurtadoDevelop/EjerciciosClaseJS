<?php

if (isset($_REQUEST['usuario'])){
    $usuario=$_REQUEST['usuario'];
    
    if ($usuario!="Usuario"){
        
        echo "El usuario no es válido<br>";
        echo "Aquí tienes otras alternativas:<br>";
        echo $usuario."123";
        
    }
}




?>