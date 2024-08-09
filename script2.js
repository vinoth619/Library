  var index;
function edit(i){
    const dialogue=document.getElementById('dialog-edit');
    dialogue.showModal()
    index=i;
    let books=JSON.parse(localStorage.getItem("books")||'[]');
    document.getElementById("book").value=books[index].bookname
    document.getElementById("author").value=books[index].author
    document.getElementById("pages").value=books[index].pages




     
  }




const editform =((event)=>{
     
    var c= document.getElementById("dialog-edit")
     let book=document.getElementById("book")
     let author=document.getElementById('author')
     let pages=document.getElementById('pages')
     let check=document.getElementById("check")


     event.preventDefault();
    let books=JSON.parse(localStorage.getItem("books") ||'[]');


         
        books[index].bookname=book.value
        books[index].author=author.value
        books[index].pages=pages.value
        books[index].status=check.checked==true?"READ":"NOT READ"
     localStorage.removeItem("books");
     localStorage.setItem("books",JSON.stringify(books));
    books=JSON.parse(localStorage.getItem("books"))


    let  k=books.map((e,i)=>{
      return  (`<div>
          <span class="icon"><img src=${e.edit} alt="ke" onclick=${`edit(${i})`}>
          <img src=${e.close} alt="close" onclick=${`remove(${i})`}></span>
         <h3>Book Name: ${e.bookname}</h3><p>Author: ${e.author}</p><p>${e.status}</p><P>NO OF pages:${e.pages}<P></div>`)
    }).join('')

    document.getElementById("con").innerHTML=k;

     c.close();

    
    
  
})





