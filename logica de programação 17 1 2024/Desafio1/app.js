let porcentagemDesconto = 0;
let quantidadeMilhas = prompt('Quantas milhas você tem?')

if(quantidadeMilhas > 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
    console.log(porcentagemDesconto)
    console.log(quantidadeMilhas)
} else {
    if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
    console.log(porcentagemDesconto)
    console.log(quantidadeMilhas)
}

}


alert('Você conseguiu ' + porcentagemDesconto + ' de desconto');
