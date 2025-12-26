let preguntaDeporte = document.getElementById("idDeporteFavorito");
let preguntaSerie = document.getElementById("idSerieFavorita");
let preguntaPelicula = document.getElementById("idPeliculaFavorita");
let btnAceptar = document.getElementById("idBoton");

let respuestaDeporte = document.getElementById("respuestaDeporte");
let respuestaSerie = document.getElementById("respuestaSerie");
let respuestaPelicula = document.getElementById("respuestaPelicula");

let aficionesGuardadas = new Set();

btnAceptar.addEventListener("click", enviar);

function enviar() {  
    document.querySelectorAll(".pregunta").forEach(pregunta => {
        pregunta.classList.remove("verde", "azul");
        pregunta.classList.add("rojo");
    });

    document.querySelectorAll("p").forEach(p => {
        p.classList.remove("azul", "verde");
        p.classList.add("negro");
    });

    let valorDeporte = preguntaDeporte.value;
    let valorSerie = preguntaSerie.value;
    let valorPelicula = preguntaPelicula.value;

    procesarAficion(valorDeporte, respuestaDeporte);
    procesarAficion(valorSerie, respuestaSerie);
    procesarAficion(valorPelicula, respuestaPelicula);

    preguntaDeporte.value = "";
    preguntaSerie.value = "";
    preguntaPelicula.value = "";
}

function procesarAficion(valor, contenedor) {
    if (valor.trim() === "") return;

    if (!aficionesGuardadas.has(valor)) { 
        aficionesGuardadas.add(valor);
        dibujarEnPantalla(valor, contenedor);
    }
}

function dibujarEnPantalla(texto, contenedor) {
    let preguntaActual = contenedor.querySelector(".pregunta");
    if (preguntaActual) {
        preguntaActual.classList.remove("rojo");
        preguntaActual.classList.add("verde");
    }

    let p = document.createElement("p");
    p.innerHTML = texto;
    p.classList.add("azul");
    contenedor.appendChild(p);
}