let myLibrary = [];


document.querySelector(".book-add").addEventListener("click", function(){
    document.querySelector("#container").style.display = "inline-block"; 
})

document.querySelector("#submit").addEventListener("click", function(){
    document.querySelector("#container").style.display = "none";
    addBookToLibrary();
})

function Book(author,title,pages,read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read; 

    this.bookPrint = function (){
        return ( author + "," + title + +pages + " pages" +read);
    }
}

function addBookToLibrary(){

    //gets values from inputs
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;

    let inputs = new Book(author,title,pages,'kek')
    myLibrary.push(inputs)
    let bookContainer = document.createElement("div");
    bookContainer.className = "book-container"
    let bookInput = document.createElement("p");
    let bookButton = document.createElement("button");
    bookButton.className = "book-button"
    bookButton.addEventListener("click",function(){
        bookContainer.remove();
    })
    
    bookInput.textContent = inputs.bookPrint();
    document.querySelector(".library").appendChild(bookContainer);
    bookContainer.appendChild(bookInput);
    bookContainer.appendChild(bookButton);
    return inputs;
}