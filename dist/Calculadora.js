"use strict";
let numero1 = verificarValor('digite um numero');
let numero2 = verificarValor('digite um numero');
let resulta;
let sistema = false;
while (!sistema) {
    let opcao = verificarOpção('Escolha a operação que deseja: \n1- soma\n2- subtração\n3- multiplicação\n4- divisão\n0- Sair');
    switch (opcao) {
        case "1":
            resulta = somar(numero1, numero2);
            alert('Seu resultado é: ' + resulta);
            break;
        case "2":
            resulta = subitração(numero1, numero2);
            alert('Seu resultado é: ' + resulta);
            break;
        case "3":
            resulta = multiplicacao(numero1, numero2);
            alert('Seu resultado é: ' + resulta);
            break;
        case "4":
            resulta = divisão(numero1, numero2);
            alert('Seu resultado é: ' + resulta);
            break;
        case "0":
            sistema = true;
    }
}
function verificarOpção(pergunta) {
    let resposta;
    resposta = prompt(pergunta);
    while (resposta != "1" && resposta != "2" && resposta != "3" && resposta != "4" && resposta != "0") {
        alert('Resposta inválida');
        resposta = prompt(pergunta);
    }
    return resposta;
}
function verificarValor(pergunta) {
    let resposta;
    resposta = Number(prompt(pergunta));
    while (isNaN(resposta)) {
        alert('Resposta inválida');
        resposta = Number(prompt(pergunta));
    }
    return resposta;
}
function somar(numero1, numero2) {
    return numero1 + numero2;
}
function subitração(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}
function divisão(numero1, numero2) {
    return numero1 / numero2;
}
