// document.querySelector("button").addEventListener("click", () => {
//     console.log("clicked");
// });

let library = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus
}

function addBookToLibrary(object) {
    library.push(object);
}

let alchemist = new Book("The Alchemist", "Paul Coelho", 163, "Not read");

console.log(library);

addBookToLibrary(alchemist);

console.log(library);

let quran = new Book("Al-Qur'an", "Allah", 604, "Read");

addBookToLibrary(quran);

console.log(library);

//hot to create 1 card
//how to create 1 card with title, author, pages & status

//how to create multiple card based off of library length

//how to display 1 book inside card?
//how to display 2 books inside card?

let main = document.querySelector("main");

library.forEach((obj) => {
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






// library.forEach((book) => {
//     console.log(book.name);
//     console.log(book.pages)
// })