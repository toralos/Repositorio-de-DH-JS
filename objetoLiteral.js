let curso = {
    cantidad_de_alumnos:32,
    profesores: 'Pipi y Popo',
    cuandoClase: 'Entre las 13 y las 14h',
    quieroSaber: function(){
        return 'La clase es:  ' + this.cuandoClase
    }

}
console.log(curso.quieroSaber())
console.log("La cantidad de alumnos es " + curso.cantidad_de_alumnos)

//construccion de Objeto Literal

function clase (cantidadDeAlumnos, profesores, horario){
    this.alumnos = cantidadDeAlumnos,
    this.profesores = profesores,
    this.horario = horario
}
let clase1 = new clase(12, 'Juan y Pedro', 'Empieza a las 13')
console.log(clase1)