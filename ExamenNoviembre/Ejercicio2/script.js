let clickCount = document.getElementById("clickCount");
let keyCount = document.getElementById("keyCount");
let clickArea = document.getElementById("clickArea");
let resetBtn = document.getElementById("resetBtn");

let contadorA = 0
let contadorClick = 0 

document.addEventListener("keypress",function(e){

    if(e.key === "a" || e.key === "A"){
        contadorA++
        keyCount.innerHTML = contadorA
    }
})

clickArea.addEventListener("click",function(){
    contadorClick++
    clickCount.innerHTML = contadorClick
})

resetBtn.addEventListener("click",function(){
    clickCount.innerHTML = 0
    keyCount.innerHTML = 0

})