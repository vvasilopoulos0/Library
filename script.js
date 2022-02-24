let myLibrary = [];

document.querySelector(".book-add").addEventListener("click", function(){
    

    if (myLibrary.length < 12) {
        document.querySelector("#container").style.display = "inline-block"; 
        
    }
    document.getElementById("author").value = ""
    document.getElementById("title").value = ""
    document.getElementById("pages").value = ""
})

document.querySelector("#submit").addEventListener("click", function(){
    let validation = validateInputs(); /* flag value that checks whether we get correct inputs */
    
    if (validation == true){
        document.querySelector("#container").style.display = "none";
        
        myLibrary = addBookToLibrary(myLibrary);

    }
    
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
    console.log(pages)
    let readOption = "";
    if (document.getElementById("read").checked == true){
        readOption = "already read"
    }
    else{
        readOption = "not read yet"
    }


    let inputs = new Book(author,title,pages,readOption)
    myLibrary.push(inputs)

    containerCreate(inputs,myLibrary);
    
    return myLibrary;
}

function bookRemove(deleteTitle,Library){
    for (let i =0; i < Library.length; i++){
        if (deleteTitle == Library[i].title) {
            myLibrary.splice(i,1)
            break;
        }
    }
    return Library;
}

function containerCreate(inputs,Library){
    

    let bookContainer = document.createElement("div");
    let bookInput = document.createElement("p");
    let bookTitle = document.createElement("p");
    let bookButton = document.createElement("button");

    bookContainer.className = "book-container"
    bookTitle.innerHTML = title;
    bookTitle.style.display = "none";
    
    
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
        Library = bookRemove(deleteTitle,Library);
    })


    return Library
}

function validateInputs(){
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let validationPrint = document.getElementById("validation-print");

    if ((author.length < 2) || (title.length < 2) ){
        validationPrint.textContent = "Author and title must contain atleast 2 characters";
        validationPrint.style.display = "inline";
        return false;
    }

    if ((pages == "") || (pages <= 0)){
        validationPrint.textContent = "Enter valid page number";
        validationPrint.style.display = "inline";
        return false;
    }
    validationPrint.style.display = "none"
    return true;
}