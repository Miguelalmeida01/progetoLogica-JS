/*Forma de pagamento

Condições
-À vista débito, recebe 10% de desconto;
-À vista no dinheiro ou pix, recebe 15% de desconto;
-Em duas vezes, preço normal de etiqueta sem juros;
-acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/
const pagamento = 'duasVzes'
const valor = 100;
const porcentagemDebito = 10;
const porcentagemPix = 15;
const parcelasSJuros = 2;
const parcelasJ = 3;
const valorComJuros = 10;


if(pagamento === 'debito'){
    desconto = (valor * porcentagemDebito) / 100
    preco_final = valor - desconto
    console.log(preco_final.toFixed(2))
}else if (pagamento === 'dinheiroOuPix'){
    dinheiroOuPix = (valor * porcentagemPix) / 100
    preco_final = valor - dinheiroOuPix
    console.log(preco_final.toFixed(2))
}else if (pagamento === 'duasVezes'){
    duasVezes = valor / parcelasSJuros
    console.log(duasVezes.toFixed(2)) 
} else{
    parcelasJuros = valor + (valor * valorComJuros / 100)
    parcelas = parcelasJuros / parcelasJ
    console.log(parcelas.toFixed(2)) 
}