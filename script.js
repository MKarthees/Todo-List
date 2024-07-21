var overlay = document.querySelector(".overlay");
var addtaskapp = document.querySelector(".add-task-app");
var task = document.querySelector(".list-items");
var taskNo = document.querySelector(".task-no");
var taskName = document.querySelector(".task-name");
var taskStatus = document.querySelector(".task-status");


function addTask(){
    if(taskNo.value=="" || taskName.value=="" || taskStatus.value==""){
        alert("Please Enter All Field");
    }
    else{
    let div = document.createElement("div");
    div.innerHTML=`<div class="task"><label id="new-task-no">${taskNo.value}</label><li>${taskName.value}</li><li>${taskStatus.value}</li><i class="fa fa-pen-to-square"></i>
    <i class="fa fa-trash" onclick="removeTask(event)" ></i></div>`;
    task.appendChild(div);
    }
    taskNo.value="";
    taskName.value="";
    taskStatus.value="";
    saveData();
}


function removeTask(event){
    event.target.parentElement.remove();
    saveData();
}


function newTaskAppOpen(){
    overlay.style.display="block";
    addtaskapp.style.display="block";
}

function newTaskAppClose(){
    overlay.style.display="none";
    addtaskapp.style.display="none";
    }

function saveData(){
    localStorage.setItem("data",task.innerHTML);
    }

    function showData(){
        task.innerHTML= localStorage.getItem("data");
    }
showData();
