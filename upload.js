

   function upload(event){
   let Open=document.getElementById("dialog-up")
   Open.showModal()
   
   }

   function closeup(event){
     event.preventDefault()
     let Open=document.getElementById("dialog-up")
     Open.close()
     
    }

    function submitup(event){
        event.preventDefault();
        
     let book=document.getElementById("bookup");
     let author=document.getElementById("authorup");
     let pages=document.getElementById("pagesup");
     let checkup=document.getElementById("checkup")
     let objects={edit:"./pencil-custom.png" ,close:"./trash-can-custom.png" ,bookname:book.value,author:author.value,pages:pages.value,status:checkup.checked==true?"READ":"NOT READ"} 
   
      goat=JSON.parse(localStorage.getItem("books")||'[]');
     
     goat.push(objects)
     localStorage.removeItem("books")
     localStorage.setItem("books",JSON.stringify(goat))
     let get=JSON.parse(localStorage.getItem("books")||'[]')
     book=get;
 
     let  k=book.map((e,i)=>{
      return  (`<div>
          <span class="icon"><img src=${e.edit} alt="ke" onclick=${`edit(${i})`}>
          <img src=${e.close} alt="close" onclick=${`remove(${i})`}></span>
         <h3>Book Name: ${e.bookname}</h3><p>Author: ${e.author}</p><p>${e.status}</p><P>NO OF pages:${e.pages}<P></div>`)
    }).join('')
      
       console.log(k)
  var ks= document.getElementById("con")
   ks.innerHTML=k;
      let Open=document.getElementById("dialog-up")

      Open.close()
      document.getElementById("cre-form").reset()



    }