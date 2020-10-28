//if ternario
let comida = "pizza"

let cena = comida == "pasta"? "Que bueno me encanta la pasta" : "Yo quería pasta"
console.log (cena)


function esPar(numero){
    return (numero % 2 == 0) ? "Sí, es par" : "No, no es par"
}
console.log(esPar(8))

//if switch

let semaforo = "amarillo"
switch(semaforo){
    case "verde" :
        console.log("Pasa tranquilo");
        break;
    case "amarillo":
        console.log("Apurate dale");
        break;
    case "rojo":
        console.log("No pases amigo");
        break;
    default:
        console.log ("no funca el semaforo");
        break;        
}

function poste (color){
    switch(color){
        case "verde" :
            console.log("Pasa tranquilo");
            break;
        case "amarillo":
            console.log("Apurate dale");
            break;
        case "rojo":
            console.log("No pases amigo");
            break;
        default:
            console.log ("no funca el semaforo");
            break;        
    }
    
}
poste("verde")