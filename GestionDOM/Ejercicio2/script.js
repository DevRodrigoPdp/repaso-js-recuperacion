let ul = document.createElement("ul")
document.body.appendChild(ul)
let button = document.createElement("button")
button.innerHTML = "InsertarAleatorio"

document.body.appendChild(button)
button.addEventListener("click",aleatorio)

function aleatorio(){
    let numeroAleatorio = Math.random()
    let li = document.createElement("li")
    li.innerHTML = `Nuevo Elemento : ${numeroAleatorio}`
    ul.appendChild(li)
}