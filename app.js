const input = document.querySelector("input")
const addButton = document.querySelector("button")
const todoUl = document.querySelector("ul")
// console.log(todoUl);



const addTodo = ()=> {
    if(!input.value){
        alert("Please type something...")
    }else{
        const li = document.createElement("li")
        const icon = document.createElement("i")
        icon.className = "fa-regular fa-circle"
        li.innerText = input.value
        li.prepend(icon)
        todoUl.prepend(li)
        input.value = ""
    }
}

addButton.addEventListener("click", addTodo)
