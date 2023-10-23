window.onload = () => {
    const div = document.querySelector('.div');
    let img; //= document.querySelector('img');

    div.addEventListener('click', mover);
    let moverImagen = false;
    function mover(event) {
        moverImagen = !moverImagen;
        console.log(moverImagen);
        img = event.target;
    }
    document.addEventListener('mousemove', (event) => {
        //const img = event.target;

        if(moverImagen){
        img.style.top =  event.clientY-80 + 'px' ;
        img.style.left = event.clientX-80 + 'px' ;
        console.log(event.clientX ,event.clientY)
    }
    });
}



