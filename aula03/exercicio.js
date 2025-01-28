/*Calculo de IMC

condições 
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 obsesidade;
- Acima de 40 obsesidade grave;
*/ 

const peso = 100;
const altura = 1.52;
const imc = peso / Math.pow(altura,2);
console.log(imc.toFixed(2));

if (imc < 18.5 ){
    console.log('Você está abaixo do peso');
} else if( imc >= 18.5 && imc < 25){
    console.log('Você está com peso normal');
} else if( imc >= 25 && imc < 30){
    console.log('Você está acima do peso ');
} else if( imc >= 30 && imc <= 40){
    console.log('Você está com obsesidade ');
} else {
    console.log('Você está com obsesidade grave ');
}