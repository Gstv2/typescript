"use strict";
let saldo = 100.0;
let saldo1 = 0.0;
let conta;
let senha;
let system = login("Digite seu user", "Digite sua senha");
while (!system) {
    let opcao = verificarOpção1('Escolha a operação que deseja: \n1- consultarSaldo\n2- sacar\n3- transferência\n4- depositar\n0- Sair');
    switch (opcao) {
        case "1":
            consultarSaldo();
            break;
        case "2":
            sacar();
            break;
        case "3":
            transferencia();
            break;
        case "4":
            depositar();
            break;
        case "0":
            system = true;
    }
}
function login(pergunta, pergunta1) {
    let user;
    let password;
    let tentativas = 0;
    while (tentativas < 3) {
        user = prompt(pergunta);
        password = prompt(pergunta1);
        if ((user == "iallen" && password == "1234") || (user == "gustavo" && password == "6969")) {
            conta = user;
            senha = password;
            return false;
        }
        else {
            alert('Senha ou usuário incorretos!');
            tentativas++;
        }
    }
    alert("Você fez o número máximo de tentativas!");
    return true;
}
function verificarOpção1(pergunta) {
    let resposta;
    resposta = prompt(pergunta);
    while (resposta != "1" && resposta != "2" && resposta != "3" && resposta != "4" && resposta != "0") {
        alert('Resposta inválida');
        resposta = prompt(pergunta);
    }
    return resposta;
}
function verificarValor1(pergunta) {
    let resposta;
    resposta = Number(prompt(pergunta));
    while (isNaN(resposta)) {
        alert('Resposta inválida');
        resposta = Number(prompt(pergunta));
    }
    return resposta;
}
function consultarSaldo() {
    console.log(conta);
    if (conta == "iallen") {
        alert('Seu saldo atual é: R$ ' + saldo.toFixed(2));
    }
    if (conta == "Gustavo") {
        alert('Seu saldo atual é: R$ ' + saldo1.toFixed(2));
    }
}
function depositar() {
    let valor = verificarValor1('Digite o valor que deseja depositar:');
    if (conta == "iallen") {
        saldo += valor;
        alert('Depósito de R$ ' + valor.toFixed(2) + ' realizado com sucesso.');
    }
    if (conta == "Gustavo") {
        saldo1 += valor;
        alert('Depósito de R$ ' + valor.toFixed(2) + ' realizado com sucesso.');
    }
}
function sacar() {
    let valor = verificarValor1('Digite o valor que deseja sacar:');
    if (conta == "iallen") {
        if (valor > saldo) {
            alert('Saldo insuficiente para saque.');
        }
        else {
            saldo -= valor;
            alert('Saque de R$ ' + valor.toFixed(2) + ' realizado com sucesso.');
        }
    }
    if (conta == "Gustavo") {
        if (valor > saldo1) {
            alert('Saldo insuficiente para saque.');
        }
        else {
            saldo1 -= valor;
            alert('Saque de R$ ' + valor.toFixed(2) + ' realizado com sucesso.');
        }
    }
}
function transferencia() {
    let valor = verificarValor1('Digite o valor que deseja transferir:');
    let destinatario = prompt('Digite o nome de usuário da conta de destino:');
    if (destinatario === null) {
        alert('Transferência cancelada.');
        return;
    }
    if (conta === 'iallen') {
        if (valor > saldo) {
            alert('Saldo insuficiente para transferência.');
        }
        else if (destinatario === 'iallen') {
            alert('Você não pode transferir para sua própria conta.');
        }
        else if (destinatario === 'gustavo') {
            saldo -= valor;
            saldo1 += valor;
            alert('Transferência de R$ ' + valor.toFixed(2) + ' para ' + destinatario + ' realizada com sucesso.');
        }
        else {
            alert('Destinatário inválido.');
        }
    }
    else if (conta === 'gustavo') {
        if (valor > saldo1) {
            alert('Saldo insuficiente para transferência.');
        }
        else if (destinatario === 'gustavo') {
            alert('Você não pode transferir para sua própria conta.');
        }
        else if (destinatario === 'iallen') {
            saldo1 -= valor;
            saldo += valor;
            alert('Transferência de R$ ' + valor.toFixed(2) + ' para ' + destinatario + ' realizada com sucesso.');
        }
        else {
            alert('Destinatário inválido.');
        }
    }
    else {
        alert('Você não está logado em nenhuma conta.');
    }
}
