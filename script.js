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
    let read = document.querySelector("#read").checked;

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

function removeThis (bookName) {
    index = library.findIndex(obj => obj.title == bookName);

    library.splice(index, 1);
    removeAllChildNodes(main);
    displayBooks(library);
}

function changeReadStatus (bookName) {
    index = library.findIndex(obj => obj.title == bookName);

    if (library[index].readStatus === false) {
        library[index].readStatus = true;
    } else {
        library[index].readStatus = false;
    }

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
        let changeReadStatusButton = document.createElement("button");
        changeReadStatusButton.textContent = "Change Read Status";
        changeReadStatusButton.setAttribute("value", `${obj.title}`)
        changeReadStatusButton.setAttribute("onclick", "changeReadStatus(value)");

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "deleteButton");
        deleteButton.setAttribute("value", `${obj.title}`);
        deleteButton.setAttribute("onclick", "removeThis(value)");
        deleteButton.textContent = "Delete";
    
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);
        card.appendChild(deleteButton);
        card.appendChild(changeReadStatusButton);
    
        card.classList.add("card");
        main.appendChild(card);
    });
}