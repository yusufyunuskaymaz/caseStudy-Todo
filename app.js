const input = document.querySelector("input")
const addButton = document.querySelector("button")
const todoUl = document.querySelector("ul")
const clearAll = document.querySelector("#clear")
const number = document.querySelector("#number")





const addTodo = ()=> {
    if(!input.value){
        alert("Please type something...")
    }else{
        const li = document.createElement("li")
        const icon = document.createElement("i")
        const span = document.createElement("span")
        icon.className = "fa-regular fa-circle"
        span.innerText = input.value
        li.className = "todo-li"
        li.appendChild(span)
        console.log(li);
        li.prepend(icon)
        todoUl.prepend(li)
        input.value = ""

         // Taking number of todos
         const allTodos = document.querySelectorAll(".todo-li")
        number.innerText = allTodos.length
         
    }
}

const submit = (e)=>{
    if(e.key == "Enter"){
        addTodo()
    }
}

const completed = (e)=>{
    if(e.target.className == "fa-regular fa-circle"){
        e.target.className = "fa-solid fa-circle-check"
        e.target.nextElementSibling.className = "completed"
    }else if(e.target.className == "fa-solid fa-circle-check"){
        e.target.className = "fa-regular fa-circle"
        e.target.nextElementSibling.className = ""
    }
}

const clearTodos = ()=>{
    if(confirm("All Todos Will Be Deleted")){
        todoUl.innerHTML = ""
    }
}

addButton.addEventListener("click", addTodo)
todoUl.addEventListener("click", completed)
clearAll.addEventListener("click", clearTodos)
input.addEventListener("keyup", submit)