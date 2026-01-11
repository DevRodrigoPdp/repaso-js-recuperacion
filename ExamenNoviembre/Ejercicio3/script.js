let totalProductos = document.getElementById("totalProductos");
let importeTotal = document.getElementById("importeTotal");
let productSelect = document.getElementById("productSelect");
let productoList = document.getElementById("productoList");


let productosData = [];
let informacion = new Map([
    ["cantidad", 0],
    ["total", 0]
]);


fetch("productos.json")
    .then(response => {
        if (!response.ok) throw new Error("No encontrado");
        return response.json();
    })
    .then(data => {
        productosData = data.productos;
        productosData.forEach(producto => {
            let option = document.createElement("option");
            option.value = producto.id;
            option.innerHTML = producto.nombre;
            productSelect.appendChild(option);
        });
    })
    .catch(error => console.error('Error:', error));

productSelect.addEventListener("change", (e) => {

    const idSeleccionado = parseInt(e.target.value);

    const producto = productosData.find(p => p.id === idSeleccionado);

    if (producto) {
        agregarAListaVisual(producto);
        actualizarInformacionMap(producto.precio);
    }
});


function actualizarInformacionMap(precio) {

    let cantidadActual = informacion.get("cantidad");
    let totalActual = informacion.get("total");

    cantidadActual += 1;
    totalActual += precio;

    informacion.set("cantidad", cantidadActual);
    informacion.set("total", totalActual);

    totalProductos.innerText = informacion.get("cantidad");
    importeTotal.innerText = informacion.get("total").toFixed(2) + "€";
}


function agregarAListaVisual(producto) {

    const ultimoRojo = document.querySelector(".nuevo-producto-rojo");
    if (ultimoRojo) {
        ultimoRojo.classList.remove("nuevo-producto-rojo");
    }

    const li = document.createElement("li");
    li.classList.add("product-item", "nuevo-producto-rojo");

    li.innerHTML = `
        <div class="product-info">
            <span class="product-name">${producto.nombre}</span>
            <span class="product-price">${producto.precio.toFixed(2)}€</span>
        </div>
    `;

    li.addEventListener("dblclick", () => {
        eliminarProducto(li, producto.precio);
    });

    productoList.appendChild(li);
}

function eliminarProducto(elemento, precio) {
    elemento.remove();

    let cant = informacion.get("cantidad") - 1;
    let total = informacion.get("total") - precio;

    informacion.set("cantidad", cant);
    informacion.set("total", total);

    totalProductos.innerText = cant;
    importeTotal.innerText = total.toFixed(2);
}
