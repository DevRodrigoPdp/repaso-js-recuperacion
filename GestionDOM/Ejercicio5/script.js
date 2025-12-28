// --- Selección de elementos ---
let origen = document.getElementById("origen");
let destino = document.getElementById("destino");
let fechaIda = document.getElementById("fechaIda");
let fechaVuelta = document.getElementById("fechaVuelta");
let soloIda = document.getElementById("soloIda");
let btnSubmit = document.getElementById("btnSubmit");
let swapButton = document.getElementById("swapButton")

let resOrigen = document.getElementById("resOrigen");
let resDestino = document.getElementById("resDestino");
let resFechaIda = document.getElementById("resFechaIda");
let resFechaVuelta = document.getElementById("resFechaVuelta");
let resSoloIda = document.getElementById("resSoloIda");

let historialBusquedas = []

soloIda.addEventListener("change", function() {
    if (this.checked) {
        fechaVuelta.disabled = true;
        fechaVuelta.value = "";
    } else {
        fechaVuelta.disabled = false;
    }
});


function validar() {
    if (origen.value.trim() === "" || destino.value.trim() === "") {
        alert("Necesitas rellenar los campos de origen y destino");
        return false;
    }

    let hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    let fechaIdaSeleccionada = new Date(fechaIda.value);

    if (fechaIdaSeleccionada < hoy) {
        alert("La fecha de Ida no puede ser anterior a la fecha actual");
        return false;
    }

    if (!soloIda.checked) {
        if (fechaVuelta.value === "") {
            alert("Debes seleccionar una fecha de vuelta");
            return false;
        }
        let fechaVueltaSeleccionada = new Date(fechaVuelta.value);
        if (fechaVueltaSeleccionada < fechaIdaSeleccionada) {
            alert("La fecha de la vuelta no puede ser antes que la ida");
            return false;
        }
    }
    return true;
}

swapButton.addEventListener("click",function(){
    let obj = origen.value
    origen.value = destino.value 
    destino.value = obj
})


function enviar(event) {
    event.preventDefault();

    if (!validar()) {
        return; 
    }

    resOrigen.innerHTML = " " + origen.value;
    resDestino.innerHTML = " " + destino.value;

   
    let fIdaObj = new Date(fechaIda.value);
    resFechaIda.innerHTML = " " + fIdaObj.toLocaleDateString('es-ES');

   
    if (!soloIda.checked) {
        let fVueltaObj = new Date(fechaVuelta.value);
        resFechaVuelta.innerHTML = " " + fVueltaObj.toLocaleDateString('es-ES');
        resSoloIda.innerHTML = " No";
    } else {
        resFechaVuelta.innerHTML = " ";
        resSoloIda.innerHTML = " Sí";
    }

    let nuevaBusqueda = {
        origen: origen.value,
        destino: destino.value,
        fechaIda: fechaIda.value,
        fechaVuelta : fechaVuelta.value,
        soloIda: soloIda.checked
    };

    historialBusquedas.push(nuevaBusqueda)
    document.getElementById("travelForm").reset()

    fechaVuelta.disabled = false
}

btnSubmit.addEventListener("click", enviar);