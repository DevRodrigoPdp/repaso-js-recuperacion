const selectorAutores = document.getElementById("selectorAutores")


fetch("libros.json").then(response => {
    if (!response.ok) {
        throw new Error("Los datos no se han cargado correctamente")
    }
    return response.json()
})
    .then(data => {
        let nombres = data.map(item => item.Autor)
        let autoresLimpios = new Set(nombres)
        autoresLimpios.forEach(autor => {
            let option = document.createElement("option")
            option.innerHTML = autor
            selectorAutores.appendChild(option)
        })

        selectorAutores.addEventListener("change", (e) => {
            const autorElegido = e.target.value
            console.log("Has elegido a :", autorElegido)
            mostrarLibros(autorElegido,data)
        })
    })
    .catch(error => { console.log(error) })


function mostrarLibros(autorElegido, dataCompleta) {

    const contenedor = document.getElementById("miDiv")

    contenedor.innerHTML = ""
    const librosFiltrados = dataCompleta.filter(libro => libro.Autor === autorElegido)

    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");


    const encabezado = tabla.insertRow();
    encabezado.innerHTML = "<th>Titulo</th><th>Fecha</th>";

    librosFiltrados.forEach(libro => {
        const fila = tabla.insertRow();

        const celdaTitulo = fila.insertCell(0);
        celdaTitulo.textContent = libro.Titulo;


        const celdaFecha = fila.insertCell(1);
        celdaFecha.textContent = libro.Fecha;
    })

    contenedor.appendChild(tabla)
}


