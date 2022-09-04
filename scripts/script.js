const $container = document.querySelector(".books-container")
const $button=document.querySelector(".add-button");
const $modal = document.querySelector(".book-dialog");
const $submit = document.querySelector(".modal-submit");
const $cancel = document.querySelector(".modal-cancel");
const $title = document.getElementById("title");
const $author = document.getElementById("author");
const $pages = document.getElementById("pages");
const $read = document.getElementById("read");
let size=1;
let myBooks=[
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: false
    }
];
function Book(title,author,pages,read,posted){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
 $button.addEventListener("click", () =>{
    $modal.showModal();
 });
$cancel.addEventListener("click", () => {
    $modal.close();
})
function addBookToArray(book)
{
    if(myBooks.some(e => e.title == book.title))
       return false;
    myBooks.push(book);
    return true;
}
$submit.addEventListener("click", () => {
   let newBook = new Book(title.value,author.value,pages.value,read.value);
   if(addBookToArray(newBook))
    myBooks.slice(size).forEach((book) => {
                console.log("intra");
                const box = document.createElement("div");
                box.classList.add("box");
                $container.appendChild(box);
                formatBox(box, book.title, book.author, book.pages, book.read);
        size++;
    })
   console.log(myBooks);
});
function formatBox(box,titleV,authorV,pagesV,readV)
{
    let title = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let read = document.createElement("p");
    title.innerHTML=`Title:${titleV}`;
    author.innerHTML=`Author:${authorV}`;
    pages.innerHTML=`Pages:${pagesV}`;
    read.innerHTML=`Read:${readV}`;
    box.appendChild(title);
    box.appendChild(author);
    box.appendChild(pages);
    box.appendChild(read);

}

