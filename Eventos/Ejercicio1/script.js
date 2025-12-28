let  btnPulsame = document.getElementById("btnPulsame")
let body = document.querySelector("body")
function cambiarColor(event) {
    event.stopPropagation();

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

body.addEventListener("click",function(){
   
    document.body.style.backgroundColor = "white"
})