// console.log("Page has been linked");

class Book {
    #name = ""
    #writer = ""
    #pages = 0
    #read = false
    constructor(name, writer, pages, read) {
        this.#name = name;
        this.#writer = writer;
        this.#pages = pages;
        this.#read = read;
    }
    get name() {
        return this.#name;
    }
    get writer() {
        return this.#writer;
    }
    get pages() {
        return this.#pages;
    }
    get read() {
        return this.#read;
    }
    set read(value) {
        this.#read = value;
    }
}

const libraryModule = (() => {
    let myBookshelf = [];
    function addBookToLibrary(name, writer, pages, read) {
        let newBook = new Book(name, writer, pages, read);
        myBookshelf.push(newBook);
    }
    function getDiv(book, index) {
        let myDiv = document.createElement('div');
        myDiv.classList.add('row');
        myDiv.classList.add('card');
        myDiv.classList.add('w-50');
        // myDiv.classList.add('');
        myDiv.setAttribute("id", `book${index}`);
        myDiv.innerHTML = `<h3>${book.name}</h3><p>${book.writer},${book.pages},${book.read ? "Read" : "Unread"}</p>`;
        myDiv.innerHTML += `<div class="d-flex justify-content-center"> <button type="button" class="btn btn-danger w-25 remove-button" value="${index}">Remove</button><button type="button" class="btn btn-primary read-button" value="${index}">Mark as Read</button></div>`;
        return myDiv;
    }
    function remove(index) {
        myBookshelf.splice(index, 1);
    }
    function markRead(index) {
        myBookshelf[parseInt(index)].read = true;

    }
    const Bookshelf = () => myBookshelf;
    return { Bookshelf, addBookToLibrary, getDiv, remove, markRead };
})();

// console.log(toggleForm);





// console.log(myBookshelf);
// console.log(mainList);


const displayControlModule = (() => {
    let library = libraryModule;
    const mainList = document.getElementById('main-list');
    const inputs = document.querySelectorAll('input');
    const select = document.querySelector('select');
    const toggleForm = document.getElementsByClassName('book-toggler')[0];
    const form = document.querySelector('form');
    function displayBooks() {
        mainList.innerHTML = '';
        library.Bookshelf().forEach((book, index) => {
            let div = library.getDiv(book, index);
            mainList.appendChild(div);
        });
        refreshEventListeners();
    }
    function removeItem() {
        // console.log(this)
        library.remove(this.value);
        displayBooks();
    }
    function markRead() {
        library.markRead(this.value);
        displayBooks();
    }
    function clearForm() {
        inputs.forEach(input => input.value = "");
    }

    function addNewBook() {
        let [name, writer, pages] = [...inputs].map(input => input.value);
        let read = select.value === "true";
        library.addBookToLibrary(name, writer, pages, read);
        clearForm();
        displayBooks();
    }
    function refreshEventListeners() {
        let removeButtons = document.querySelectorAll('.remove-button');
        let readButtons = document.querySelectorAll('.read-button');
        removeButtons.forEach(button => {
            button.addEventListener('click', removeItem);
        });
        // console.log(button.type);
        readButtons.forEach(button => {
            button.addEventListener('click', markRead);
        })

    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addNewBook();
    });
    library.addBookToLibrary("Random book 1", "random writer 1", 100, false);
    library.addBookToLibrary("Random book 2", "random writer 2", 100, false);
    library.addBookToLibrary("Random book 3", "random writer 3", 100, false);
    library.addBookToLibrary("Random book 4", "random writer 4", 100, false);

    return { addNewBook, displayBooks };
})();


const display = displayControlModule;

display.displayBooks();




