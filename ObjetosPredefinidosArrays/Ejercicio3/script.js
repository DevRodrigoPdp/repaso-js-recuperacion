const div = document.getElementById("div")
setInterval(()=>{
   if(div.style.visibility === "hidden"){
    div.style.visibility = "visible"
   }else{
    div.style.visibility = "hidden"
   }
},1000)