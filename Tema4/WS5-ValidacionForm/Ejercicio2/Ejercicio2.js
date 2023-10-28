
window.onload = function () {
 
    const nombre = document.getElementById("nombre");
    nombre.addEventListener("blur", validarNombre);

    const apellidos = document.getElementById("apellidos");
    apellidos.addEventListener("blur", validarApellidos);

    const DNI = document.getElementById("dni");
    DNI.addEventListener("blur", validarDNI);

    const telefono = document.getElementById("telefono");
    telefono.addEventListener("blur", validarTelefono);

    const email = document.getElementById("email");
    email.addEventListener("blur", validarEmail);

    const usuario = document.getElementById("usuario");
    usuario.addEventListener("blur", validarUsuario);

    const enviar = document.getElementById("enviar");
    enviar.addEventListener("click", validarFormulario);
    

};
let contadorErrores = 0;

  function validarNombre() {
    const nombre = document.getElementById("nombre").value;
    const nombreRegex = /^[a-zA-Z]+$/;
    console.log("hola");
    if (!nombreRegex.test(nombre)) {
      document.getElementById("errorNombre").innerHTML = "El nombre no es válido.";
      contadorErrores++;
      return false;
    }

    return true;
  }

  function validarApellidos() {
    const apellidos = document.getElementById("apellidos").value;
    const apellidosRegex = /^[a-zA-Z]+$/;

    if (!apellidosRegex.test(apellidos)) {
        document.getElementById("errorApellidos").innerHTML = "Los apellidos no es válido.";
        contadorErrores++;
      return false;
    }

    return true;
  }

  function validarDNI(){
    const dni = document.getElementById("dni").value;
    const dniRegex = /^\d{8}[a-zA-Z]$/;

    if (!dniRegex.test(dni)) {
        document.getElementById("errorDNI").innerHTML = "El DNI no es válido.";
        contadorErrores++;
      return false;
    }

    return true;
  }

  function validarTelefono(){
    const telefono = document.getElementById("telefono").value;
    const telefonoRegex = /^\d{9}$/;

    if (!telefonoRegex.test(telefono)) {
        document.getElementById("errorTelefono").innerHTML = "El teléfono no es válido.";
        contadorErrores++;
      return false;
    }

    return true;
  }

    function validarEmail(){
        const email = document.getElementById("email").value;
        const emailRegex = /\w+@\w+\.\w+/;
    
        if (!emailRegex.test(email)) {
            document.getElementById("errorEmail").innerHTML = "El email no es válido.";
            contadorErrores++;
        return false;
        }
    
        return true;
    }

    function validarUsuario(){
        const usuario = document.getElementById("usuario").value;
        const usuarioRegex = /^[a-zA-Z0-9]+$/;
    
        if (!usuarioRegex.test(usuario)) {
            document.getElementById("errorUsuario").innerHTML = "El usuario no es válido.";
            contadorErrores++;
        return false;
        }
    
        return true;
    }
    function validarFormulario() {
      contadorErrores = 0; // Reinicia el contador de errores
      // Llama a todas las funciones de validación para asegurarte de que se ejecuten
      validarNombre();
      validarApellidos();
      validarDNI();
      validarTelefono();
      validarEmail();
      validarUsuario();
      console.log(  contadorErrores);
      // Si contadorErrores es mayor que cero, el formulario no se envía
      if (contadorErrores > 0) {
        console.log("Hay errores");
        // Si hay errores, muestra un mensaje en "erroresGenerales"
        document.getElementById("erroresGenerales").innerHTML = "Por favor, corrija los errores antes de enviar el formulario.";
        evt.preventDefault(); // Evita el envío del formulario
    }
  }