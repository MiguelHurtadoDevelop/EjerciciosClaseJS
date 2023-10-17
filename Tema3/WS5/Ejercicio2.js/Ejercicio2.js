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
        this.Books[this.currentBook].Read = true;
        this.Books[this.currentBook].ReadDate = new Date(Date.now());
        this.BooksRead++;
        this.BooksRead--;
        this.currentBook = this.nextBook;
        this.nextBook = this.currentBook + 1;
        this.lastBook = this.currentBook ;

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

const bookList = new BookList();


const book1 = new Book("Book 1", "Fantasy", "Author 1", false, null);
const book2 = new Book("Book 2", "Science Fiction", "Author 2", false, null);

bookList.add(book1);
bookList.add(book2);


console.log(bookList.Books);
console.log(bookList.Books[bookList.currentBook]);
bookList.finishCurrentBook();
console.log(bookList.Books[bookList.currentBook]);
