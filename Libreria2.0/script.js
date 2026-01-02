
const isbnInput = document.getElementById("book-isbn");
const tituloInput = document.getElementById("book-title");
const autorInput = document.getElementById("book-author");
const paginasInput = document.getElementById("book-pages");
const leidoInput = document.getElementById("book-read");
const btnAdd = document.getElementById("add-book-btn");


const listaUI = document.getElementById("book-list");


const statTotal = document.getElementById("stat-total");
const statPromedio = document.getElementById("stat-promedio");
const statLargo = document.getElementById("stat-largo");
const statPendientes = document.getElementById("stat-pendientes");

let libreria = new Map()

btnAdd.addEventListener("click",anadir)

function anadir(){

    let isbn = isbnInput.value.trim()
    let titulo = tituloInput.value.trim()
    let autor = autorInput.value.trim()
    let paginas = parseInt(paginasInput.value.trim())
    let leido = leidoInput.checked


    if(isbn === "" || titulo === "" || autor === "" || isNaN(paginas)){
        alert("Debes de rellenar correctamente los campos")
        return 
    }

    libreria.set(isbn,{titulo:titulo,autor:autor,paginas:paginas,leido:leido})
    crearLista()

}

function crearLista(){
    listaUI.innerHTML = ""
    libreria.forEach((datos,isbn)=>{
     let li = document.createElement("li");
        
        
        let estadoTexto = datos.leido ? "✅ Leído" : "⏳ Pendiente";
        let claseEstado = datos.leido ? "read" : "pending";

        li.innerHTML = `
            <div class="book-info">
                <strong>${datos.titulo}</strong>
                <span>${datos.autor} | ${datos.paginas} páginas</span>
            </div>
            <span class="badge ${claseEstado}">${estadoTexto}</span>
        `;

        
        listaUI.appendChild(li);

})
calcularEstadisticas();
}


function calcularEstadisticas(){

    let sumLibros = libreria.size
    let pages = Array.from(libreria.values()).map(datos=> datos.paginas)
    let sumaPaginas = pages.reduce((a,b)=>a+b,0)
    let promedioPages = sumaPaginas/pages.length

    let masPaginas = Math.max(...pages)
    let tituloMayor = ""
    libreria.forEach((datos,nombre)=>{
        if(datos.paginas === masPaginas){
            tituloMayor = nombre
        }
    })

    let pendientes = 0

    libreria.forEach((datos)=>{
        if(!datos.leido){
            pendientes++
        }
    })

    statTotal.innerHTML = sumLibros;
    statPromedio.innerHTML = promedioPages.toFixed(1); // Un decimal para que quede profesional
    statLargo.innerHTML = `${tituloMayor} (${masPaginas} pág.)`;
    statPendientes.innerHTML = pendientes;



}

