window.onload = function () {
    const cookieUsuario = document.cookie.split(';').find(row => row.startsWith('usuario'));
    
    if (!cookieUsuario) {
        var fecha = new Date();
        fecha.setTime(fecha.getTime() + (5 * 60 * 1000));
        Nombreusuario = prompt("Introduce tu nombre de usuario");
        var cookie = 'usuario=' + Nombreusuario + '; expires=' + fecha.toUTCString();
        document.cookie = cookie;
    } else {
        document.getElementById('saludo').innerHTML = "Bienvenido " + cookieUsuario.split('=')[1];
    }
}