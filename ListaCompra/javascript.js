let totalPrice = document.getElementById("total-price");
let totalUnits = document.getElementById("total-units");
let listaProductos = document.getElementById("product-list"); 
let input = document.getElementById("product-input");

const estadisticas = new Map();
estadisticas.set("total-unidades", 0);
estadisticas.set("total-precio", 0);

document.getElementById("add-btn").addEventListener("click", anadirElemento);

function anadirElemento() {
    let valor = input.value.split(",");
    
    if (valor.length < 2) return;

    let nombre = valor[0].trim();
    let precio = parseFloat(valor[1].trim());

    if (nombre && !isNaN(precio)) {
        estadisticas.set("total-precio", estadisticas.get("total-precio") + precio);
        estadisticas.set("total-unidades", estadisticas.get("total-unidades") + 1);

        let li = document.createElement("li");
        
        li.innerHTML = `<span>${nombre}</span>
                        <span>${precio.toFixed(2)}€</span>
                        <button class="delete-btn">Eliminar</button>`;

        let deleteBtn = li.querySelector(".delete-btn");
        
        deleteBtn.addEventListener("click", () => {
            estadisticas.set("total-unidades", estadisticas.get("total-unidades") - 1);
            estadisticas.set("total-precio", estadisticas.get("total-precio") - precio);

            calcularTotalPrecio();
            calcularTotalUnidades();
            li.remove();
        });

        listaProductos.appendChild(li);
        calcularTotalPrecio();
        calcularTotalUnidades();
        input.value = "";
    }
}

function calcularTotalPrecio() {
    totalPrice.innerHTML = estadisticas.get("total-precio").toFixed(2);
}

function calcularTotalUnidades() {
    totalUnits.innerHTML = estadisticas.get("total-unidades");
}