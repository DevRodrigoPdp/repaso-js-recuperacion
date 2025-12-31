const libros = [
    ["El Quijote", "Miguel de Cervantes", 1605, "Disponible", 1032],
    ["Cien años de soledad", "Gabriel García Márquez", 1967, "Prestado", 471],
    ["1984", "George Orwell", 1949, "Disponible", 328],
    ["El Aleph", "Jorge Luis Borges", 1949, "Prestado", 200],
    ["Harry Potter", "J.K. Rowling", 1997, "Disponible", 309]
];

function mostrarLibros() {
    const tabla = document.getElementById("cuerpoTabla");

    tabla.innerHTML = "";

    libros.forEach((libro) => {

        let fila = `
            <tr>
                <td>${libro[0]}</td>
                <td>${libro[1]}</td>
                <td>${libro[2]}</td>
                <td>${libro[3]}</td>
                <td>${libro[4]}</td>
            </tr>
        `;

        tabla.innerHTML += fila;
    });
}


function generarInforme() {
    const numLibros = libros.length
    let librosDisponibles = 0

    libros.forEach(libro => {
        if (libro[3] === "Disponible") {
            librosDisponibles++
        }
    })

    const años = libros.map(libro => libro[2]);
    const añoMinimo = Math.min(...años);
    const añoMaximo = Math.max(...años);


    let paginas = libros.map(l => l[4])
    let paginasMedias = paginas.reduce((a, b) => a + b, 0) / paginas.length
    const informeDiv = document.getElementById("informe");
    informeDiv.innerHTML = `
    <p>Total de libros: ${numLibros}</p>
    <p>Libros disponibles: ${librosDisponibles}</p>
    <p>Año del libro más antiguo: ${añoMinimo}</p>
    <p>Promedio de páginas: ${paginasMedias.toFixed(1)}</p>
`;
}

function mostrarLibros() {
    actualizarTabla(libros);
}


function librosModernos() {
    const filtrados = libros.filter(libro => libro[2] >= 1900);
    filtrados.sort((a, b) => a[2] - b[2]);
    
    actualizarTabla(filtrados);
}

function actualizarTabla(listaDeLibros) {
    const tabla = document.getElementById("cuerpoTabla");
    tabla.innerHTML = "";

    
    listaDeLibros.forEach((libro) => {
    const clasePrestado = libro[3] === "Prestado" ? "fila-prestado" : "";º1

        let fila = `
            <tr class="${clasePrestado}">
                <td>${libro[0]}</td>
                <td>${libro[1]}</td>
                <td>${libro[2]}</td>
                <td>${libro[3]}</td>
                <td>${libro[4]}</td>
            </tr>
        `;
        
        tabla.innerHTML += fila;
    });
}

function ordenarPorExtension(){

    let librosOrdenados = [...libros]
    librosOrdenados.sort((a,b)=>{
        return a[4]-b[4]
    })

    actualizarTabla(librosOrdenados)
    
}