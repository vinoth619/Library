let ks=document.getElementById("con") ;
     
       

 

 function no(){
  return (`<h1>no book</h1>`)
 }

 let books=JSON.parse(localStorage.getItem("books")||'[]')
 
  k=books.map((e,i)=>{
  return  (`<div>
      <span class="icon"><img src=${e.edit} alt="ke" onclick=${`edit(${i})`}>
      <img src=${e.close} alt="close" onclick=${`remove(${i})`}></span>
     <h3>Book Name: ${e.bookname}</h3><p>Author: ${e.author}</p><p>${e.status}</p><P>NO OF pages:${e.pages}<P></div>`)
}).join('')

 ks.innerHTML=k;

// remove function
function remove(index){


 let books= JSON.parse(localStorage.getItem("books")||'[]')
const kiri= books.filter((e,i)=>{
   return    i!==index
   })
 
   localStorage.removeItem("books")
   localStorage.setItem("books",JSON.stringify(kiri))
   books=JSON.parse(localStorage.getItem("books")||'[]')
    console.log(books)
      k=books.map((e,i)=>{
      return  (`<div>
          <span class="icon"><img src=${e.edit} alt="ke" onclick=${`edit(${i})`}>
          <img src=${e.close} alt="close" onclick=${`remove(${i})`}></span>
         <h3>Book Name: ${e.bookname}</h3><p>Author: ${e.author}</p><p>${e.status}</P><P>NO OF pages:${e.pages}<P></div>`)
    }).join('')
   
    ks.innerHTML=k;
    localStorage.setItem("books",JSON.stringify(books))
  }
// remove function end


// show edit form 

// close edit form
function closed(event){
  const dialogue=document.getElementById('dialog-edit')
   event.preventDefault();
    dialogue.close();
    
}





         

         
    ks.innerHTML=k

