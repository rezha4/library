let dialog = document.querySelector("dialog");
let bookTitle = document.querySelector("input#title");
let main = document.querySelector("main");
let library = [];

document.querySelector("button").addEventListener("click", () => {
    dialog.showModal();
});

document.querySelector("form button").addEventListener("click", () => {
    removeAllChildNodes(main);

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;

    let book = new Book(title, author, pages, read, library.length);
    addBookToLibrary(book);
    displayBooks(library);
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function Book(title, author, pages, readStatus, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.index = index;
}

function addBookToLibrary(object) {
    library.push(object);
}

function removeThis (posInArray) {
    index = library.findIndex(obj => obj.index == parseInt(`${posInArray}`));

    console.log(index);

    library.splice(index, 1);
    removeAllChildNodes(main);
    displayBooks(library);
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

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "deleteButton");
        deleteButton.setAttribute("value", `${obj.index}`);
        deleteButton.setAttribute("onclick", "removeThis(`${value}`)");
        deleteButton.textContent = "Delete";
    
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);
        card.appendChild(deleteButton);
    
        card.classList.add("card");
        main.appendChild(card);
    });
}