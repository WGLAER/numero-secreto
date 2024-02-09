//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
//Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacaoJogo = prompt('Qual a sua pontuação?');

if(pontuacaoJogo >= 100){
    alert('Você ganhou!!!');
}else{
    alert('Você perdeu!!!');
}