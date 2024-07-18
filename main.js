var addbtn = document.querySelector(".add-button");
var todo_insert = document.querySelector(".todo-insert");
var overlay = document.querySelector(".overlay");
var list_align = document.querySelector(".list-align");
var cancle = document.querySelector(".cancle");
var add_task = document.querySelector(".add-task");
var field1 = document.querySelector(".field1");
var field2 = document.querySelector(".field2");
var field3 = document.querySelector(".field3");
var list = document.querySelector(".list");
var list1 = document.querySelector(".list2");
var list2 = document.querySelector(".list3");
function show() {
  overlay.style.display = "block";
  todo_insert.style.display = "block";
}

function unshow() {
  overlay.style.display = "none";
  todo_insert.style.display = "none";
}
function addtask() {
  if (field1.value === "") {
    alert("This Is Empty");
  } else {
    let li = document.createElement("li");
    li.innerHTML = field1.value;
    list.appendChild(li);
  }
  if (field2.value === "") {
    alert("This Is Empty");
  } else {
    let li = document.createElement("li");
    li.innerHTML = field2.value;
    list1.appendChild(li);
  }
  if (field3.value === "") {
    alert("This Is Empty");
  } else {
    let li = document.createElement("li");
    li.innerHTML = field3.value;
    list2.appendChild(li);
  }
}
