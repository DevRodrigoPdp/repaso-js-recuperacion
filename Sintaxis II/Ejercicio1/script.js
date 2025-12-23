let entrada = prompt("Introduce un numero")

if(entrada !== null && entrada !== "" && !isNaN(entrada)){
    alert("Es un numero " + entrada)
}else{
    alert("No es un numero " + entrada)
}