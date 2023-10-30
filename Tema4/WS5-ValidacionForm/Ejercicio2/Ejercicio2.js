
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

    const Contraseña = document.getElementById("Contraseña");
    Contraseña.addEventListener("blur", validarContrasena);

    const confirmarContraseña = document.getElementById("confirmarContraseña");
    confirmarContraseña.addEventListener("blur", validarConfirmarContrasena);


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
    }else{
      document.getElementById("errorNombre").innerHTML = "";
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
    else{
      document.getElementById("errorApellidos").innerHTML = "";
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
    }else{
      document.getElementById("errorDNI").innerHTML = "";
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
    }else{
      document.getElementById("errorTelefono").innerHTML = "";
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
        }else{
          document.getElementById("errorEmail").innerHTML = "";
        }
    
        return true;
    }

    function validarUsuario(){
        const usuario = document.getElementById("usuario").value;
        const usuarioRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]{8,}$/;
    
        if (!usuarioRegex.test(usuario)) {
            document.getElementById("errorUsuario").innerHTML = "El usuario no es válido.";
            contadorErrores++;
        return false;
        }else{
          document.getElementById("errorUsuario").innerHTML = "";
        }
    
        return true;
    }

    function validarContraseña() {
      const Contraseña = document.getElementById("Contraseña").value;
      const ContraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  
      if (!ContraseñaRegex.test(Contraseña)) {
          document.getElementById("errorContraseña").innerHTML = "La contraseña no cumple con los requisitos.";
          contadorErrores++;
          return false;
      } else {
          document.getElementById("errorContraseña").innerHTML = "";
      }
  
      return true;
  }

  function validarConfirmarContraseña() {
    const Contraseña = document.getElementById("Contraseña").value;
    const confirmarContraseña = document.getElementById("confirmarContraseña").value;

    if (Contraseña !== confirmarContraseña) {
        document.getElementById("errorConfirmarContraseña").innerHTML = "Las contraseñas no coinciden.";
        contadorErrores++;
        return false;
    } else {
        document.getElementById("errorConfirmarContraseña").innerHTML = "";
    }

    return true;
}
function validarTyc() {
  const checkboxTyc = document.getElementById("TyC");

  if (!checkboxTyc.checked) {
      document.getElementById("errorTyC").innerHTML = "Debes aceptar los Términos y Condiciones.";
      contadorErrores++;
      return false;
  } else {
      document.getElementById("errorTyC").innerHTML = "";
  }

  return true;
}

function validarFormulario(event) {
  contadorErrores = 0; // Reinicia el contador de errores

  validarNombre();
  validarApellidos();
  validarDNI();
  validarTelefono();
  validarEmail();
  validarUsuario();
  validarContraseña();
  validarConfirmarContraseña();
  validarTyc();

  // Si contadorErrores es mayor que cero, el formulario no se envía
  if (contadorErrores > 0) {
      document.getElementById("erroresGenerales").innerHTML = "Por favor, corrija los errores antes de enviar el formulario.";
      event.preventDefault();
  }
}