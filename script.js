let addTaskBox=document.getElementById("addTaskBox");
let taskList=document.querySelector(".task-list");
let updateTaskApp=document.querySelector(".update-container");
let inputBox=document.querySelector(".input-box");

function addTask() {
    if (addTaskBox.value==="") {
        alert("Enter Task")
    }
    else{
        let task=document.createElement("li");
        task.innerHTML=`<span><p>${addTaskBox.value}</p><input type="text" placeholder="Update Task"><i class="fa fa-edit edit" onclick="update(event)"></i>
        <i class="fa fa-xmark remove" onclick="removeTask(event)"></i></span>`;
        taskList.appendChild(task);
    }
    addTaskBox.value="";
    savedate();
}

function closePopup() {
    updateTaskApp.style.display="none";
}

function update(event) {
   event.target.parentElement.children[0].innerHTML=event.target.parentElement.children[1].value;
   event.target.parentElement.children[1].value="";
   savedate();
   
}

function removeTask(event){
    event.target.parentElement.remove();
    savedate();
}

function savedate() {
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask() {
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();