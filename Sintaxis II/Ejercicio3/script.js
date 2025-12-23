let correcto = false
numeroSecreto  = Math.floor(Math.random() * 100)
let contador = 0



while(!correcto){
    entrada = parseInt(prompt("Introduce un numero"))
    
    if(entrada == null || isNaN(entrada)){
        alert("Debes de introducir un numero")
    }
    if(entrada > numeroSecreto){
        alert("El numero secreto es mas pequeño que el numero que tu has introducido ")
        contador +=1
    }else if(entrada < numeroSecreto){
        alert("El numero sercreto es mas grande que el numero que has introducido")
        contador +=1
    }else{
        alert(`Has acertado el numero correcto,era el ${numeroSecreto},lo has sacado en ${contador} intentos`)
    
    }
}