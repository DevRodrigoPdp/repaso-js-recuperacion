const estudiantes = [
  "Ana García",
  "Luis Martínez",
  "María López",
  "Carlos Rodríguez",
  "Elena Sánchez",
  "Pedro Hernández",
];


let estudiantesSlice = estudiantes.slice(2,5)
console.log(estudiantesSlice)

let estudiantesJoin = estudiantes.join("|")
console.log(estudiantesJoin)

let primerEstudiante = estudiantes[0]; 
let nombreApellido = primerEstudiante.split(" "); 
console.log("Nombre y Apellido:", nombreApellido);

