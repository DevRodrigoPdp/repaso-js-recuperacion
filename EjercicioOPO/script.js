
function cargarDatos() {

    const frameworkLista = document.querySelector(".framework-lista")
    const ambitoSeleccionado = document.querySelector('input[name="tipo-ambito"]:checked').value;
    fetch("lenguajes.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Los datos no se han cargado correctamente");
            }
            return response.json();
        })
        .then((data) => {
            
            frameworkLista.innerHTML = ""

            const datosFiltrados = data.filter(item => item.ambito === ambitoSeleccionado)


            datosFiltrados.forEach(lenguaje => {
                let li = document.createElement("li")
                li.classList.add("framework-elemento")
                li.innerHTML = `${lenguaje.framework} [${lenguaje.lenguaje}]`
                frameworkLista.appendChild(li)
            })
        })
        .catch((error) => {
            return console.log(error);
        });

}

const radios = document.querySelectorAll('input[name="tipo-ambito"]');
radios.forEach(radio=>{
    radio.addEventListener("change",(e)=>{
        cargarDatos()
    })
})


