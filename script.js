let dialog = document.querySelector("dialog");
let bookTitle = document.querySelector("input#title");
let main = document.querySelector("main");

document.querySelector("button").addEventListener("click", () => {
    dialog.showModal();
});

let library = [];

document.querySelector("form button").addEventListener("click", () => {
    removeAllChildNodes(main);

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;

    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);

    displayBooks(library);
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus
}

function addBookToLibrary(object) {
    library.push(object);
}

function displayBooks(array) {
    array.forEach((obj) => {
        let card = document.createElement("div");
    
        let title = document.createElement("p");
        title.textContent = `Title: ${obj.title}`;
    
        let author = document.createElement("p");
        author.textContent = `Author: ${obj.author}`;
    
        let pages = document.createElement("p");
        pages.textContent = `Pages: ${obj.pages}`;
    
        let readStatus = document.createElement("p");
        readStatus.textContent = `Read status: ${obj.readStatus}`;
    
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);
    
        card.classList.add("card");
        main.appendChild(card);
    })
}