// console.log("Page has been linked");
let myBookshelf = [];
function Book(name,writer,pages,read){
    this.name = name;
    this.writer = writer;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name,writer,pages,read){
    let newBook = new Book(name,writer,pages,read);
    myBookshelf.push(newBook);
}


