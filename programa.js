//para aplicar lógica sin usar "sort"
const prompt = require("prompt-sync")();
let numero1 = Number(prompt("Ingresar primer número: "));
let numero2 = Number(prompt("Ingresar segundo número: "));
let numero3 = Number(prompt("Ingresar tercer número: "));

let repetidos = false;

if (numero1 === numero2 || numero2 === numero3 || numero3 === numero1) {
  repetidos = true;
}

let mayor;
if (numero1 >= numero2 && numero1 >= numero3) {
  mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
  mayor = numero2;
} else {
  mayor = numero3;
}

let menor;
if (numero1 <= numero2 && numero1 <= numero3) {
  menor = numero1;
} else if (numero2 <= numero1 && numero2 <= numero3) {
  menor = numero2;
} else {
  menor = numero3;
}

let medio;
medio = numero1 + numero2 + numero3 - mayor - menor;

const decreciente = [mayor, medio, menor];
const creciente = [menor, medio, mayor];

console.log(decreciente);
console.log(creciente);

if (repetidos) {
  console.log("Al menos dos de los números son iguales");
}
