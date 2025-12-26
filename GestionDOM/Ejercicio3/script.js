let input = document.getElementById("cantidad")
let contenedor = document.getElementById("contenedor")
let button = document.getElementById("btnCrear")

button.addEventListener("click",enviar)

function limpiar(){
   contenedor.innerHTML = ""
}

function enviar(){
    limpiar()
    let valor = parseInt(input.value)
    
    for(let i= 0;i<valor;i++){
       
        let checkBoxes = document.createElement("input")
        checkBoxes.type = "checkbox"
        let texto  = document.createElement("span")
        texto.innerHTML = Math.random()
        let br = document.createElement("br")

        contenedor.appendChild(checkBoxes)
        contenedor.appendChild(texto)
        contenedor.appendChild(br)
    }

    
}
