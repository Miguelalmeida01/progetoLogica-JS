//calculo de media 
//classificação
// reprovado < 5, recuperação 5 => 7 , passou > 7

const nota1 = 7.1;
const nota2 = 7.1;
const nota3 = 7.1;

const media = (nota1 + nota2 + nota3) / 3;

if ( media < 5) {
    console.log('você foi reprovado.');
} else if ( media >= 5 && media <= 7) {
    console.log('você está de recuperação.');
}else{
    console.log('Parabens,você passou de ano.');
}
