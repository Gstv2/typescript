"use strict";
let tabuleiro = [];
tabuleiro = criarTabuleiro();
let jogadorAtual = ' X ';
let vencedor;
let tabuleiroPrint = '';
let sistema2 = true;
while (sistema2) {
    tabuleiroPrint = exibirTabuleiro();
    // Lendo a jogada do jogadorAtual
    let posicao = verificarEntrada("É a vez do " + jogadorAtual + "\n" + tabuleiroPrint + "\n" + 'Digite a posição da sua jogada (1-9): ');
    // Fazendo a jogada
    fazerJogada(posicao - 1);
    // Verificando se houve empate
    if (verificarEmpate()) {
        exibirTabuleiro();
        alert('Empate!');
        sistema2 = jogaNovamente("deseja jogar novamente? ");
    }
    //Verifica se houve Vitoria
    vencedor = verificarVitoria();
    // Verificando se houve vitória
    if (vencedor == " X " || vencedor == " O ") {
        exibirTabuleiro();
        alert('O jogador ' + vencedor + ' venceu!');
        sistema2 = jogaNovamente("deseja jogar novamente? ");
    }
}
//Verifica se o jogador colocou um numero ou texto e se ele escolheu uma posição valida
function verificarEntrada(pergunta) {
    let resposta;
    resposta = Number(prompt(pergunta));
    let opcao = verificarOpcao(resposta);
    while (isNaN(resposta)) {
        alert('Resposta inválida');
        resposta = Number(prompt(pergunta));
    }
    while (!opcao) {
        alert('Resposta inválida');
        resposta = Number(prompt(pergunta));
        opcao = verificarOpcao(resposta);
    }
    return resposta;
}
//verifica se resposta é um numero entre 1 a 10
function verificarOpcao(resposta) {
    let resultado = false;
    for (let i = 1; i < 10; i++) {
        if (resposta != i) {
            resultado = false;
        }
        else {
            return true;
        }
    }
    return resultado;
}
//cria o tabuleiro com seus 9 espaços
function criarTabuleiro() {
    for (let i = 0; i < 9; i++) {
        tabuleiro[i] = "    ";
    }
    return tabuleiro;
}
// Função para fazer uma jogada e verificar se existe alguma jogada ja existente no espaço
function fazerJogada(posicao) {
    if (tabuleiro[posicao] === '    ') {
        tabuleiro[posicao] = jogadorAtual;
        alternarJogador();
    }
    else {
        alert('Posição já ocupada!');
    }
}
// Função para alternar entre os jogadores
function alternarJogador() {
    // Caso o jogadorAtual for X ele muda para O ou O para X
    jogadorAtual = jogadorAtual === ' X ' ? ' O ' : ' X ';
}
// Função para verificar se houve empate
function verificarEmpate() {
    //Caso não haja mais nenhum dos espaço vazio, retornará empate
    for (let i = 0; i < 9; i++) {
        if (tabuleiro[i] === '    ') {
            return false;
        }
    }
    return true;
}
// Função para verificar se houve vitória
function verificarVitoria() {
    for (let i = 0; i < 3; i++) {
        //verificar linhas
        if (tabuleiro[i * 3] != '    ' && tabuleiro[i * 3] == tabuleiro[i * 3 + 1] && tabuleiro[i * 3 + 1] == tabuleiro[i * 3 + 2]) {
            return tabuleiro[i * 3];
        }
        // Verificando colunas
        if (tabuleiro[i] === tabuleiro[i + 3] && tabuleiro[i + 3] === tabuleiro[i + 6] && tabuleiro[i] !== '    ') {
            return tabuleiro[i];
        }
    }
    // Verificando diagonais
    if ((tabuleiro[0] == tabuleiro[4] && tabuleiro[4] == tabuleiro[8]) ||
        (tabuleiro[2] == tabuleiro[4] && tabuleiro[4] == tabuleiro[6])) {
        return tabuleiro[4];
    }
    return null;
}
// Função para exibir o tabuleiro
function exibirTabuleiro() {
    let tabuleiroPrint = '';
    //Ele cria um loop controlado para fazer as linhas e guarda numa variavel de acumuladores
    for (let i = 0; i < 3; i++) {
        tabuleiroPrint += ('| ' + tabuleiro[i * 3] + ' | ' + tabuleiro[i * 3 + 1] + ' | ' + tabuleiro[i * 3 + 2] + "|\n");
    }
    //Guarda na variavel as 3 linhas
    return tabuleiroPrint;
}
//verifica se o user deseja jogar novamente
function jogaNovamente(pergunta) {
    let sistema = prompt(pergunta);
    if (sistema == "sim") {
        tabuleiro = criarTabuleiro();
        return true;
    }
    else {
        return false;
    }
}
