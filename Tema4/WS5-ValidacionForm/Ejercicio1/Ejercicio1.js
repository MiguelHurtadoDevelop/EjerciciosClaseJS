/*Haciendo uso de expresiones regulares crea funciones para validar los campos que se indican a continuación. La función recibirá un parámetro de tipo string con el valor a validar y debe devolver true o false según cumpla los requisitos de validación:

validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula
validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&
validarCorreo: El parámetro debe tener el formato correcto de un email
validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
validarLongitud: El parámetro debe tener al menos 8 caracteres.
validarNumero: El parámetro debe contener al menos un dígito.*/





function validarMayuscula(cadena){
    var regExp = /[A-Z]/;
    return regExp.test(cadena);
}
function validarCaracteresEspeciales(cadena){
    var regExp = /[!@#$%^&]/;
    return regExp.test(cadena);
}
function validarCorreo(cadena){
    var regExp = /\w+@\w+\.\w+/;
    return regExp.test(cadena);
}

function validarTarjetaCredito(cadena){
    var regExp = /\d{4}-\d{4}-\d{4}-\d{4}/;
    return regExp.test(cadena);
}
function validarLongitud(cadena){
    var regExp = /\w{8,}/;
    return regExp.test(cadena);
}
function validarNumero(cadena){
    var regExp = /\d/;
    return regExp.test(cadena);
}


