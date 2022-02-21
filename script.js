let myLibrary = [];


document.querySelector(".book-add").addEventListener("click", function(){
    document.querySelector("#container").style.display = "inline-block"; 
})

document.querySelector("#submit").addEventListener("click", function(){
    document.querySelector("#container").style.display = "none";
    myLibrary = addBookToLibrary(myLibrary);
    console.log(myLibrary)
})

function Book(author,title,pages,readOption){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read; 

    this.bookPrint = function (){
        return ( author + " , " + title + " , " +pages + " pages, " + readOption);
    }
}

function addBookToLibrary(myLibrary){

    //gets values from inputs
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let readOption = "";
    if (document.getElementById("read").checked == true){
        readOption = "already read"
    }
    else{
        readOption = "not read yet"
    }


    let inputs = new Book(author,title,pages,readOption)
    myLibrary.push(inputs)
    let bookContainer = document.createElement("div");
    bookContainer.className = "book-container"
    let bookInput = document.createElement("p");
    let bookTitle = document.createElement("p");
    bookTitle.innerHTML = title;
    bookTitle.style.display = "none";
    let bookButton = document.createElement("button");
    
    bookButton.className = "book-button"
    bookButton.innerHTML = "X"
    
    
    bookInput.textContent = inputs.bookPrint();
    document.querySelector(".library").appendChild(bookContainer);
    bookContainer.appendChild(bookInput);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookButton);

    bookButton.addEventListener("click",function(){
        bookContainer.remove();
        let deleteTitle = bookTitle.innerHTML;
        myLibrary = bookRemove(deleteTitle,myLibrary);
    })
    return myLibrary;
}

function bookRemove(deleteTitle,myLibrary){
    for (let i =0; i < myLibrary.length; i++){
        if (deleteTitle == myLibrary[i].title) {
            myLibrary.splice(i,1)
            break;
        }
    }
    return myLibrary;
}