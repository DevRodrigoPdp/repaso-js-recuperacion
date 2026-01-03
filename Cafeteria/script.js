const btnPedir = document.getElementById("btnCargar");
const listaNombres = document.getElementById("listaNombres")

btnPedir.addEventListener("click", function () {
    fetch("productos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la red")
            }
            return response.json()


        }).then(data => {
            listaNombres.innerHTML = ""
            
            
        }).catch(error => {
            listaNombres.innerHTML = `<li>${error.message}</li>`;
        });
})

