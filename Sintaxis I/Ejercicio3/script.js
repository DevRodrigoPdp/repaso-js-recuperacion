
correcto = false


while (!correcto) {


    dia = parseInt(prompt("Introduce un dia"))
    mes = prompt("Introduce un mes").toLowerCase()

    if (dia === 14 && mes === "febrero") {
        alert("Es el dia de los enamorados")
        correcto=true
    }
    else {
        alert("No es el dia de los enamorados")
    }


}

