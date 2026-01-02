const nameInput = document.getElementById("prod-name");
const qtyInput = document.getElementById("prod-qty");
const btnAdd = document.getElementById("add-inv-btn");
const listUI = document.getElementById("inventory-list");
const uniqueDisplay = document.getElementById("unique-items");

let inventario  = new Map()



btnAdd.addEventListener("click",anadir)

function anadir(){
    
    let nombre = nameInput.value.trim()
    let cantidad = parseInt(qtyInput.value.trim())
    if(nombre === "" || isNaN(cantidad)){
        alert("Por favor,rellena los campos correctamente")
        return        
    }

    if(inventario.has(nombre)){
        const stockActual = inventario.get(nombre)
        inventario.set(nombre,stockActual + cantidad)
    }else{
        inventario.set(nombre,cantidad)
    }


    limpiarImputs()
    crearLista()

}

function limpiarImputs(){
    nameInput.value = "";
    qtyInput.value = "";
    nameInput.focus();
}

function crearLista(){
    listUI.innerHTML = ""

    inventario.forEach((cantidad,nombre)=>{
        const li = document.createElement("li")
        li.innerHTML = `
            <span><strong>${nombre}</strong>: ${cantidad} unidades</span>
            <button class="delete-btn">Eliminar</button>
        `;

        li.querySelector(".delete-btn").addEventListener("click",()=>{
                inventario.delete(nombre)
                crearLista()
        })

        listUI.appendChild(li)
    })

    uniqueDisplay.innerHTML = inventario.size;
}

