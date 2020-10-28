let process = require('process');
let fs = require('fs');


if(process.argv[2] == "listarTarea"){
    console.log("Hey, voy a listar tu tarea")
    fs.readFileSync('./tareas', 'utf8')
}
else if (process.argv[2]=="crearTarea"){
    console.log("Heeeeeey, vamos a crear una nueva tarea")
}
else{
    console.log("Esperate, solo entiendo los siguientes comandos:\n* listarTarea\n* crearTarea")
}