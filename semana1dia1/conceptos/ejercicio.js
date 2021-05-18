// hacer un script que reverse una oracion
// dada la oracion "este es el mejor profe del mundo"
// que se imprima "mundo del profe mejor el es este"

// const oracion = 'este es el mejor profe del mundo';

const oracion = "este es el mejor profe del mundo";

// console.log(oracion.split(" ").reverse().join(" "));

const resultado = [];
let pal = ""
for (let el of oracion){
  if (el === " ") {
    resultado.push(pal);
    pal = "";
  } else {
    pal += el;
  }
}

let resultadoFInal = ""
for (let i = resultado.length -1 ; i >= 0 ; i--){
  resultadoFInal += resultado[i] + " ";
}

console.log(resultadoFInal);


