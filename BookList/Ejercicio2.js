class BookList{
    
    constructor(){
        this.BooksRead = 0;
        this.BooksNotRead = 0;
        this.currentBook = 0;
        this.Books = [];
        if(this.BooksRead <= 0){
            this.currentBook = 0;
            this.nextBook = 1;
            this.lastBook = null;
        }
    }

   

    add(Book){
        this.Books.push(Book);
        this.BooksNotRead++;
    }
    
   

    finishCurrentBook(){
        if (this.currentBook >= 0 && this.currentBook < this.Books.length) {
            this.Books[this.currentBook].Read = true;
            this.Books[this.currentBook].ReadDate = new Date(Date.now());
            this.BooksRead++;
            this.BooksNotRead--;
            this.currentBook = this.nextBook;
            this.nextBook = this.currentBook + 1;
            this.lastBook = this.currentBook ;
        } else {
            console.log("No current book to finish.");
        }

    }

    

}

class Book{
    ReadDate = new Date();
    constructor(Title, Genre, Author, Read, ReadDate ){
        this.Title = Title;
        this.Genre = Genre;
        this.Author = Author;
        this.Read = Read;
        this.ReadDate = ReadDate;

    }
}

window.onload = function(){
    const bookList = new BookList();
    var button = document.getElementById("enviar");

    button.addEventListener("click", function(event){
        var title = document.getElementById("title").value;
    var genre = document.getElementById("genre").value;
    var author = document.getElementById("author").value;
    
    const book = new Book(title, genre, author, false, null);
    mostrarLibros(book, bookList);
    bookList.add(book);
    title = document.getElementById("title").value = "";
    genre = document.getElementById("genre").value = "";
    author = document.getElementById("author").value = "";
    event.preventDefault();
    });
}




function mostrarLibros(book, bookList) {
    var lista = document.getElementById("lista");
    var li = document.createElement("li");
    li.innerHTML ="<b> Titulo: </b> "+ book.Title + "&nbsp;&nbsp; <b>Genero: </b> " + book.Genre + "&nbsp;&nbsp; <b>Autor: </b> " + book.Author + " ";

    
    var leer = document.createElement("button");
    leer.innerHTML= "<img src='img/libro.png'></img>";
    
    leer.addEventListener("click", function() {
        bookList.finishCurrentBook();
        li.style.textDecoration = "line-through";
    });
    
    li.appendChild(leer);

    
    var borrar = document.createElement("button");
    borrar.innerHTML= "<img src='img/papelera.png'></img>";
    
    borrar.addEventListener("click", function() {
        lista.removeChild(li);
    });
    
    li.appendChild(borrar);

    
    lista.appendChild(li);
}