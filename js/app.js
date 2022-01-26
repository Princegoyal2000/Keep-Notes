// console.log("hjioodslk");
// if users add a note add it to the local storage
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(event){
   let addTxt  = document.getElementById('addTxt');
   let addTitle  = document.getElementById('addTitle');
   let notes = localStorage.getItem('notes');
   if(notes == null)
   {
     notesObj = [];
   }
   else{
     notesObj = JSON.parse(notes);
   }
   let myObj = {
     title: addTitle.value,
     text: addTxt.value
   }
   notesObj.push(myObj);
   localStorage.setItem("notes",JSON.stringify(notesObj));
   addTxt.value="";
  //  console.log(notesObj)
   showNotes();
})
//function to show elements from localStorage
function showNotes(){
  let notes = localStorage.getItem('notes');
  if(notes == null)
  {
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element,index){
    html +=`
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text"> ${element.text}</p>
      <a id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</a>
    </div>
  </div>`
  });
  let notesElm = document.getElementById('notes');
  if(notesObj.length !=0)
  {
   notesElm.innerHTML=html;
  }
  else{
    notesElm.innerHTML = `Nothing to show!Use "add a note" sectiona bove to add notes.`
  }
}

// functioin to delete a node
function deleteNode(index){
  // console.log("I am deleting",index); 
  let notes = localStorage.getItem('notes');
  if(notes == null)
  {
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1); 
  localStorage.setItem("notes",JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
  let inputval = search.value.toLowerCase();
//  console.log("Input event fireddddddddd",inputval);
 let notecards = document.getElementsByClassName('noteCard');
 Array.from(notecards).forEach(function(element){
   let cardTxt = element.getElementsByTagName("p")[0].innerText;
  //  console.log(cardTxt);
  if(cardTxt.includes(inputval)){
    element.style.display="block";
  }
  else{
    element.style.display="none";
  }
 })
})
