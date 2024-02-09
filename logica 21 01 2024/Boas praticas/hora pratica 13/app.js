//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroInteiro = 0;
let tentativas = 0
while(numeroInteiro != 1000){
    numeroInteiro = parseInt(Math.random() * 1000 + 1);
    tentativas++;
}
console.log(`Número escolhido foi ${numeroInteiro} e teve ${tentativas} tentativas`);
