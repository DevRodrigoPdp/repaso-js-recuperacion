let nuevoProducto = document.getElementById("nuevoProducto");
let btnAnadir = document.getElementById("btnAnadir");
let listaCompra = document.getElementById("listaCompra");

let productos = new Set(); 


function validar() {
    if (nuevoProducto.value.trim() === "") {
        alert("Necesitas escribir un nuevo producto");
        return false;
    }
    return true; 
}


function dibujarLista() {
    listaCompra.innerHTML = ""; 

    productos.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = item;

        
        li.addEventListener("click", () => {
            productos.delete(item); 
            dibujarLista();
        });

        listaCompra.appendChild(li);
    });
}

function enviar() {
    if (!validar()) return;

    productos.add(nuevoProducto.value.trim());

    const miArray = [...productos];
    miArray.sort((a, b) => a.localeCompare(b));

    productos.clear();
    miArray.forEach(p => productos.add(p));

    dibujarLista();
    nuevoProducto.value = "";
}

btnAnadir.addEventListener("click", enviar);