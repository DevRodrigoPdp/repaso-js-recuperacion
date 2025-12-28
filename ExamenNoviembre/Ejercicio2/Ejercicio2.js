let clickCount = document.getElementById("clickCount");
let keyCount = document.getElementById("keyCount");
let clickArea = document.getElementById("clickArea");
let resetBtn = document.getElementById("resetBtn");

let contadorA = 0;
let contadorClicks = 0;


document.addEventListener("keydown", function(e) {
    if (e.key === "a" || e.key === "A") {
        contadorA++;
        keyCount.innerHTML = contadorA;
    }
});

clickArea.addEventListener("click", function() {
    contadorClicks++;
    clickCount.innerHTML = contadorClicks;
});


resetBtn.addEventListener("click", function() {
    
    contadorClicks = 0;
    contadorA = 0; 
    
    clickCount.innerHTML = contadorClicks;
    keyCount.innerHTML = contadorA;
    
});