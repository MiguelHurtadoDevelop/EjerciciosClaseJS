window.onload = function () {
    
    borrarCookies();
};

function crearCookie(nombre, valor, diasExpiracion) {
    var fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + diasExpiracion);

    var cookie = nombre + "=" + valor + "; expires=" + fechaExpiracion.toUTCString() + "; path=/";
    document.cookie = cookie;
}

function leerCookie(nombre) {
    const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith(nombre))
  ?.split("=")[1];
  if(cookieValue == ''){
        return null;
  }else{
        return cookieValue;
  }
}

function borrarCookies() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const parts = cookie.split('=');
        const identificador = parts[0];
        document.cookie = `${identificador}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }
}

