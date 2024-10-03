let list = document.querySelector("#list");

let todo = [];

let req = prompt("Pleae enter your request");



while(true){  //while loop is for run this app unless quit
   if(req == "quit"){
      console.log("Quiting app");
      break;
   } 

   if(req == "list"){
      console.log("-------ToDo list----------");
      for (let i=0; i<todo.length; i++) {
         console.log(`task ${i} : ${todo[i]}`);
         list.innerHTML = todo;
      }
      console.log("-----------------");
   }else if(req == "add"){
      let task = prompt(`Please enter the task to "todo" add`);
      todo.push(task);
      console.log("task added");
      
   } else if(req == "delete"){
      let idx = prompt("Enter the index you want to delete");
      idx = todo.splice(idx,1); //splice is use in array to mark the index and insert item if needed or simply cut the portion from array
      console.log(`task ${task} deleted`);
   } else if(req == "update"){
      let upInd = prompt("Enter which task update");
      let item = prompt("Enter the new task");
      update = todo.splice(upInd,1,item);
      console.log(`task ${item} updated`);
   }
   
   else {
      console.log("Wrong req");
   }
   req = prompt("Pleae enter your request");
}