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
        const span = document.createElement("span")
        icon.className = "fa-regular fa-circle"
        span.innerText = input.value
        li.appendChild(span)
        console.log(li);
        li.prepend(icon)
        todoUl.prepend(li)
        input.value = ""
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

addButton.addEventListener("click", addTodo)
todoUl.addEventListener("click", completed)
