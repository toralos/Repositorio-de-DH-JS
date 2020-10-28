let fs = require('fs'); //File System
let process = require('process');

let tareasJSON = fs.readFileSync('./tareas.json','utf8')
let arrayDeTareas = JSON.parse(tareasJSON)

switch (process.argv[2]) {
    case 'listarTareas':
        console.log("Este es el listado de tareas que existen")
        console.log("----------------------------------------")
        for(let i = 0; i<arrayDeTareas.length; i++){
           console.log((i+1) + ". " + arrayDeTareas[i].titulo + "--" + arrayDeTareas[i].estado)
        }
        break;
    case 'crearTarea':
        let nuevaTarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
        }
        arrayDeTareas.push(nuevaTarea)

        fs.writeFileSync('./tareas.json', JSON.stringify(arrayDeTareas,null, 2))
        console.log('Se creo una nueva tarea')
        break;
    case 'filtrarTareas':
        let estadoParaBuscar = process.argv[3];
        let tareasFiltradas = arrayDeTareas.filter(function(elemento){

            return estadoParaBuscar = elemento.estado
            
        })
        for(let i = 0; i<tareasFiltradas.length; i++){
            console.log((i+1) + ". " + tareasFiltradas[i].titulo + "--" + tareasFiltradas[i].estado)
         }
         break;

     default:
         console.log("Hasta el momento solo listo tareas a listarTareas")
}
