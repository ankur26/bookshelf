// console.log("Page has been linked");
let myBookshelf = [];

const mainList = document.getElementById('main-list');
const inputs = document.querySelectorAll('input');
const select = document.querySelector('select');
const toggleForm = document.getElementsByClassName('book-toggler')[0];
// console.log(toggleForm);
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
    myDiv.innerHTML += `<div class="d-flex justify-content-center"> <button type="button" class="btn btn-danger w-25 remove-button" value="${index}">Remove</button><button type="button" class="btn btn-primary read-button" value="${index}">Mark as Read</button></div>`;
    return myDiv;
}

function removeItem(){

    myBookshelf.splice(this.value,1);
    // console.log(myBookshelf);
    displayBooks();
}
function markRead(){
    myBookshelf[parseInt(this.value)].read = true;
    displayBooks();
}
function clearForm(){
    inputs.forEach(input=>input.value="");
}
function addNewBook(){
    let [name,writer,pages] = [...inputs].map(input=>input.value);
    let read = select.value === "true";
    addBookToLibrary(name,writer,pages,read);
    clearForm();
    displayBooks();
}
function refreshEventListeners(){
    let removeButtons = document.querySelectorAll('.remove-button');
    let readButtons = document.querySelectorAll('.read-button');
    removeButtons.forEach(button=>{
        button.addEventListener('click',removeItem);
        // console.log(button.type);
    });
    readButtons.forEach(button=>{
        button.addEventListener('click',markRead);
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

const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addNewBook();    
    
})
displayBooks();