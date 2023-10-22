window.onload=()=>{
    const table = document.querySelector('table');
    const btn = document.querySelector('button');

    table.addEventListener('mousemove', paintCell);
    btn.addEventListener('click', borrarTodo);

    function borrarTodo() {
        const celdas = document.querySelectorAll('td');
        for (const celda of celdas) {
            celda.style.backgroundColor = '';
        }
        
        
    }

    function paintCell(event) {
        const cell = event.target;
        if (event.ctrlKey) {
            cell.style.backgroundColor = 'red';
        } else if (event.shiftKey) {
            cell.style.backgroundColor = 'blue';
        }else if (event.altKey) {
            cell.style.backgroundColor = '';}
    }



}