// For in (es para los objetos literales)

let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}
for (let caracteristica in bart){
    console.log (bart[caracteristica])
}

//For of (es para strings o arrays)

let frase = "Nos encanta hacer la vertical";

for(let laFrase of frase){
    console.log (laFrase)
}