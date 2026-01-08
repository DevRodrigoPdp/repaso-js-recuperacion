
const gameInput = document.getElementById("game-input"); //
const addBtn = document.getElementById("add-btn"); //
const searchBar = document.getElementById("search-bar"); //


const gameList = document.getElementById("game-list"); //
const catCountDisp = document.getElementById("cat-count"); //
const totalValueDisp = document.getElementById("total-value"); //

let inventario = []
let categoriasUnicas = new Set()

addBtn.addEventListener("click",anadir)

function anadir(){

    let entrada = gameInput.value.split(",")
    let hoy = new Date().toLocaleDateString()
    

    
    let nombre = entrada[0].trim()
    let categoria = entrada[1]
    let precio = parseFloat(entrada[2])
    let stock = parseInt(entrada[3])


    let juego = {
        entrada:entrada,nombre:nombre,categoria:categoria,precio:precio,stock:stock,fechaRegistro:hoy
    }

    inventario.push(juego)
    categoriasUnicas.add(categoria)
    dibujarLista()
}

function dibujarLista(){
    
    const li = document.createElement("li")
    li.addEventListener("mouseenter",()=>{
        li.classList.add("game-item-hover")
    })

    li.addEventListener("mouseleave",()=>{
        li.classList.remove("game-item-hover")
    })
}

searchBar.addEventListener("input",()=>{
    let textoBusqueda = searchBar.value.toLowerCase()

    let filtrados = inventario.filter(juego=>{
        return juego.nombre.toLowerCase().includes(textoBusqueda)   } )

    dibujarLista(filtrados)
})

function actualizarLista(lista){
    const total = lista.reduce((acumulador,juego)=> acumulador + (juego.precio * juego.stock),0)
    totalValueDisp.innerHTML = total.toFixed(2)
}