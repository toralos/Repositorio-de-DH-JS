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
            estado: (process.argv[4] == undefined) ? "pendiente" : process.argv[4]
        }
        arrayDeTareas.push(nuevaTarea)

        fs.writeFileSync('./tareas.json', JSON.stringify(arrayDeTareas,null, 2))
        console.log('Se creo una nueva tarea')
        break;
    case 'filtrarTareas':
        let estadoParaBuscar = process.argv[3];
        let tareasFiltradas = arrayDeTareas.filter(function(elemento){

            return estadoParaBuscar == elemento.estado
            
        })
        for(let i = 0; i<tareasFiltradas.length; i++){
            console.log((i+1) + ". " + tareasFiltradas[i].titulo + "--" + tareasFiltradas[i].estado)
         }
         break;
    case 'cambiarEstado':
        let laTarea = process.argv[3]
        let elNuevoEstado = process.argv[4]
        arrayDeTareas[laTarea - 1].estado = elNuevoEstado;
        fs.writeFileSync('./tareas.json', JSON.stringify(arrayDeTareas,null, 2))
        console.log("Tu tarea fue cambiada")
         
        break;     
    case 'eliminarTarea':
        let laTareaQueQuieroEliminar = process.argv[3] - 1;
        arrayDeTareas.splice(eliminar, 1)
        fs.writeFileSync('./tareas.json', JSON.stringify(arrayDeTareas,null, 2))
        break

    case 'borrarTareaPorEstado':
        let tareasNoEliminadas = process.argv[3]
        let filtrarLaBorrada = arrayDeTareas.filter(function(elemento){
            return elemento.estado != process.argv[3]
        }) 
        fs.writeFileSync('./tareas.json', JSON.stringify(filtrarLaBorrada,null, 2))
        console.log('Se elimino la tarea')
        break;

     default:
         console.log("Hasta el momento solo listo tareas a listarTareas")
}
