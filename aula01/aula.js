//O calculo de gasto de combustivel por um carro.

const preco = 5.96;
const autonomiaKm = 12;
let km =   1580;

let gasto = km / autonomiaKm * preco;


console.log(gasto.toFixed(2));