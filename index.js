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


addBookToLibrary("Random book 1","random writer 1",100,false);
addBookToLibrary("Random book 2","random writer 2",100,false);
addBookToLibrary("Random book 3","random writer 3",100,false);
addBookToLibrary("Random book 4","random writer 4",100,false);

// console.log(myBookshelf);
// console.log(mainList);
function getDiv(book,index){
    let myDiv = document.createElement('div');
    myDiv.classList.add('row');
    myDiv.classList.add('card');
    myDiv.classList.add('w-50');
    // myDiv.classList.add('');
    myDiv.setAttribute("id",`book${index}`);
    myDiv.innerHTML = `<h3>${book.name}</h3><p>${book.writer},${book.pages},${book.read? "Read" :"Unread"}</p>`;
    myDiv.innerHTML += `<button class="btn btn-danger w-25 align-self-center" value="${index}">Remove</button>`;
    return myDiv;
}
function addValue(){
    console.log("In this function");
}
function removeItem(){

    if (this.value!=="d" && this.value !=="s") myBookshelf.splice(this.value,1);
    // console.log(myBookshelf);
    displayBooks();
}

function addNewBook(){
    console.log("Adding new book");

}
function refreshEventListeners(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button=>{
        if(button.type == "submit") return;
        else button.addEventListener('click',removeItem);
    })
}
function displayBooks(){
    mainList.innerHTML = '';
    myBookshelf.forEach((book,index) =>{
        let div = getDiv(book,index);
        mainList.appendChild(div);
    });
    refreshEventListeners();
}

const mainList = document.getElementById('main-list');
const inputs = document.querySelectorAll('input');

const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    console.log(e);
    e.preventDefault();
})
displayBooks();