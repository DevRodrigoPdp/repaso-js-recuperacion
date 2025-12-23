entrada = prompt("Introduce tus notas")
let hayDiez = false

notas = entrada.split(",")

for (let i = 0;i<notas.length;i++){
    notasActuales = Number(notas[i])

    if(notasActuales === 10){
        hayDiez = true
    
    }
    
}

if(hayDiez){
    alert("Si")
}else{
    alert("No")
}

