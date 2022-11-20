const name = document.getElementById("table-name");
const email = document.getElementById("table-email");
const phNumber = document.getElementById("table-number");
const addBtn = document.getElementById("add-btn");
const table = document.getElementById("table");


function updateTableList(){
   const newTr = document.createElement("tr")
   const newTd1 = document.createElement("td")
   const newTd2 = document.createElement("td")
   const newTd3 = document.createElement("td")
   const newTd4 = document.createElement("td")
   
  
   // removeBtn.classList.add("remove1");

   newTd1.innerText = name.value;
   newTd2.innerText = email.value;
   newTd3.innerText = phNumber.value;
   removeBtn.innerText = "Remove"
   
   table.appendChild(newTr);
   newTr.appendChild(newTd1);
   newTr.appendChild(newTd2);
   newTr.appendChild(newTd3);
   newTr.appendChild(newTd4);
   newTd4.appendChild(removeBtn)
   
   
}

var removeBtn = document.createElement("button")  



// let remove1 = removeBtn.classList.add('remove1')
removeBtn.addEventListener("click", function handleClick(event) {
   
   removeBtn.parentElement.parentElement.remove()

})
  

addBtn.addEventListener("click", ()=>{
   updateTableList();
   name.value = "";
   email.value = "";
   phNumber.value = "";
   
})
 
// function deleteRow(e){
//    console.log(e)
//    if(!e.target.classList.contains("remove1")){
//       return;
//    }
//    const btn = e.target;
//    btn.closest("tr").remove();
// }

//  remove1.addEventListener("click", function () {
//       remove1.closest("tr").remove();
//       console.log(remove1);

//    })
   




