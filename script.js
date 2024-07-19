var addTaskBtn = document.querySelector(".addtask-btn");
var overlay = document.querySelector(".overlay");
var taskInputContainer = document.querySelector(".task-input-container");
var taskName = document.querySelector(".task-name");
var taskstatus = document.querySelector(".task-status");
var taskedit=document.querySelector(".list-edit");
var taskremove=document.querySelector(".list-remove");
var inputname =document.querySelector(".list-name");
var inputstatus =document.querySelector(".list-status");
var lists=document.querySelector(".lists");
var listcontainer=document.querySelector(".list-container");

function newtask(){
    if(taskName.value === ""){
        alert("Enter Task Name");
    }
    else{
      var li = document.createElement("li");
      li.innerHTML = taskName.value;
      inputname.appendChild(li);

      let i = document.createElement("i");
      i.innerHTML = `<i class="fa fa-pen-to-square"></i>`;
      taskedit.appendChild(i);

      let span = document.createElement("span");
      span.innerHTML = `<i class="fa fa-trash"></i>`;
      taskremove.appendChild(span);
    }
    taskName.value="";


    if(taskstatus.value === ""){
      alert("Enter Task Status");
    }
    else{
    var li = document.createElement("li");
    li.innerHTML = taskstatus.value;
    inputstatus.appendChild(li);
  }
  taskstatus.value="";
  }

  // inputname.addEventListener("click",function(e){
  //   if(e.target.tagName === "span"){
  //     e.target.parentElement.remove();
  //   }
  // });
  
function addnewtask() {
  overlay.style.display = "block";
  taskInputContainer.style.display = "block";
}

function closenewtask() {
  overlay.style.display = "none";
  taskInputContainer.style.display = "none";
}

