//Ejercicio 4: Verificar si una palabra existe en un Array 
//Programar una función que reciba un array de strings y una palabra. La función debe verificar si la palabra existe en el array y devuelve true si es así, o false en caso contrario.

function palabraExisteEnArray(array, palabra) {
  return array.some(item => item.toLowerCase() === palabra.toLowerCase());
}

let camiones = ["Ford", "Iveco", "Scania", "Volvo", "Mercedes"];

// Palabra a buscar
let palabraBuscada = "Scania";

let resultado = palabraExisteEnArray(camiones, palabraBuscada);
console.log("¿La palabra existe en el array?:", resultado);