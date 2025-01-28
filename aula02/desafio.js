
//-Faça um programa que calcule o preço da viagem.

//combustivel
 const precoEtanol = 4.10;
 const precoGasolina =  6.10;
 const km = 200;
 const autonomia = 8;
 let tipos = 'Etanol';
 

 if( tipos === 'Gasolina'){
     gastoDeGasolina = km / autonomia * precoGasolina
     console.log(gastoDeGasolina.toFixed(2));
    } else{
        gastoDeAlcool = km / autonomia * precoEtanol
        console.log(gastoDeAlcool.toFixed(2));
 }