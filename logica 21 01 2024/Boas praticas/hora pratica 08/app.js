//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero.
//Use if-else para imprimir a respectiva mensagem.

let numero = prompt('Digite um número!');

if(numero == 0){
    console.log('O número é igual a zero!');
}else{
    if(numero > 0){
        console.log('o número é positivo');
    }else{
        console.log('O númeor é negativo');
    }
}