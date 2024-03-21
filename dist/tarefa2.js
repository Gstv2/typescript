"use strict";
//Questao 01
let c = Number(prompt('digite a temperatura em C'));
alert('A temperatura em Fahrenheit é' + ((c * 9 / 5) + 32));
//Questao 02
let n = Number(prompt('digite um número'));
let resto = n % 2;
if (resto == 0) {
    alert('O número é par');
}
else {
    alert('O número é impar');
}
//Questao 03
let n1 = Number(prompt('digite o número 1'));
let n2 = Number(prompt('digite o número 2'));
if (n1 > n2) {
    alert('O maior é o primeiro: ' + n1);
}
else {
    alert('O maior é o segundo: ' + n2);
}
//Questao 04
let n3 = Number(prompt('digite um número'));
let i;
for (i = 0; i <= 10; i++) {
    console.log(n3 + ' x ' + i + ' = ' + (n3 * i));
}
//Questao 05
let n4 = Number(prompt('digite um número'));
let eprimo = true;
for (i = 2; i < n4; i++) {
    if (n4 % i == 0) { //o número digitado é divisível por i
        eprimo = false;
    }
}
if (eprimo) {
    alert('O número é primo');
}
else {
    alert('O número digitado não é primo');
}
//Questao 06
let n5 = Number(prompt('digite um número'));
for (i = n5; i >= 1; i--) {
    console.log(i);
}
//Questao 07
let n6 = Number(prompt('digite um número'));
let resultado = 1;
for (i = 1; i <= n6; i++) {
    resultado = resultado * i;
}
console.log('O fatorial de ' + n6 + ' é: ' + resultado);
//Questao 08
let n7 = Number(prompt('digite um número'));
let anterior = 1;
let anteriorDoAnterior = 0;
if (n7 >= 1) {
    console.log('0');
}
if (n7 >= 2) {
    console.log('1');
}
for (i = 3; i <= n7; i++) {
    let novo = anterior + anteriorDoAnterior;
    console.log(novo);
    anteriorDoAnterior = anterior;
    anterior = novo;
}
//Questao 09
let segredo = Math.floor(Math.random() * 100);
let terminou = false;
while (!terminou) {
    let n8 = Number(prompt('digite um número'));
    if (n8 < segredo) {
        alert('Muito baixo! Tente novamente.');
    }
    if (n8 > segredo) {
        alert('Muito alto! Tente novamente.');
    }
    if (n8 == segredo) {
        alert('Correto! O número era ' + segredo);
        terminou = true;
    }
}
