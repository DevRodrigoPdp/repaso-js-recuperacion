sueldo = parseInt(prompt("Introduce el dinero que cobras"))
año = parseInt(prompt("Introduce el numero de añops que lleva cotizados"))

if (sueldo < 500 && año >= 10){
    console.log(sueldo*3)
}else if(sueldo < 500 && año < 10){
    console.log(sueldo*2)
}else{
    console.log(sueldo)
}