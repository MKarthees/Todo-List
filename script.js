var overlay = document.querySelector(".overlay");
var addtaskapp = document.querySelector(".add-task-app");
var taskItems = document.querySelector(".list-items");
var taskNo = document.querySelector(".task-no");
var taskName = document.querySelector(".task-name");
var taskStatus = document.querySelector(".task-status");
var taskUpdate = document.querySelector(".update-task-app");
var updateTaskNo = document.querySelector(".update-task-no");
var updateTaskName=document.querySelector(".update-task-name");
var updateTaskStatus=document.querySelector(".update-task-status");
var div = document.createElement("div");

function addTask(){
    if(taskNo.value=="" || taskName.value=="" || taskStatus.value==""){
        alert("Please Enter All Field");
    }
    else{
    div.innerHTML=`<div class="task"><label>${taskNo.value}</label>
                    <li>${taskName.value}</li>
                    <li>${taskStatus.value}</li>
                    <i class="fa fa-pen-to-square" onclick="updateTaskApp()"></i>
                    <i class="fa fa-trash" onclick="removeTask(event)"></i></div>`;
    taskItems.appendChild(div);

    }
    taskNo.value="";
    taskName.value="";
    taskStatus.value="";
    saveData();
}

function updateTaskApp(){
    overlay.style.display="block";
    taskUpdate.style.display="block";
}
function updateTask(event){
        console.log(div.firstChild);
        // div.children[1].innerHTML=updateTaskNo.value;
        // div.children[2].innerHTML=updateTaskName.value;
        // div.children[3].innerHTML=updateTaskStatus.value;
    
    
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
    taskUpdate.style.display="none";
    }

function saveData(){
    localStorage.setItem("data",taskItems.innerHTML);
    }

    function showData(){
        taskItems.innerHTML= localStorage.getItem("data");
    }
showData();
