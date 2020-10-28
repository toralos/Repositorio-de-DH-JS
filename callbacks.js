function doble (n1){
    return n1*2
}
function triple (n1){
    return n1*3
}
function apply (n1,callback){
     return callback (n1)
}

function agregarHttp(url) {
    return 'http://' + url
}

function procesar(unArray,callback){
    let nuevoArray = []
    for(i=0; i<unArray.length; i++){
        nuevoArray.push(callback(unArray[i]))
    }
    return nuevoArray
}
console.log(procesar(['hola','chau'],agregarHttp) )