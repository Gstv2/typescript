// Tarefa de ultilização de funções



//-----SOMA-----

let num1: number = Number(prompt('digite um numero: '));
let num2: number = Number(prompt('digite outro numero: '));
let resultado1: number = soma(num1,num2);

function soma(num1:number, num2:number){
    return num1 + num2;
}

alert('soma dos numeros digitados é: '+resultado1);





//-----MULTIPLICAÇÃO-----

let num3: number = Number(prompt('digite um numero: '));
let num4: number = Number(prompt('digite outro numero: '));

let resultado2: number = multiplicacao1(num3,num4);
function multiplicacao1(num3:number, num4:number) {
    return num3 * num4;
}
alert('multiplicação dos numeros digitados é: '+resultado2);




//-----PAR OR IMPAR-----
// Verificação de Par ou Ímpar

let num5: number = Number(prompt('digite um numero: '));
let resultado3: string = verificarParImpar(num5);

function verificarParImpar(num5:number){
    if (num5 % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}
alert('o numero digitado é: '+resultado3);






// Verificação de Número Primo
let num6: number = Number(prompt('digite um numero: '));
let resultado4: string = verificarPrimo(num6);

function verificarPrimo(num6:number):string {
    if (num6 <= 1) {
        return "não é primo";
    }
    for (let i = 2; i <= Math.sqrt(num6); i++) {
        if (num6 % i === 0) {
            return "não é primo";
        }
    }
    return "primo";
}
alert('o numero digitado é: '+resultado4);







// Cálculo de Fatorial
let num7: number = Number(prompt('digite um numero: '));
let resultado5: number = calcularFatorial(num7);

function calcularFatorial(num7:number) {
    if (num7 === 0 || num7 === 1) {
        return 1;
    }
    let resultado = 1;
    for (let j = 2; j <= num7; j++) {
        resultado *= j;
    }
    return resultado;
}
alert('o fatorial do numero digitado é: '+resultado5);







// Cálculo de Fibonacci
let num8: number = Number(prompt('digite um numero: '));
let resultado6: number = calcularFibonacci(num8);

function calcularFibonacci(num8:number) {
    let a = 0, b = 1;
    if (num8 === 0) return a;
    if (num8 === 1) return b;
    for (let i = 2; i <= num8; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}
alert(resultado6);






// Conversão de Temperatura de Celsius para Fahrenheit
let num9: number = Number(prompt('digite um numero: '));
let resultado7: number = converterCelsiusParaFahrenheit(num9);

function converterCelsiusParaFahrenheit(celsius:number) {
    return celsius * 9 / 5 + 32;
}
alert('o valor em fahrenheit é: '+resultado7);





// // Conversão de Polegadas para Centímetros]
let num10: number = Number(prompt('digite um numero: '));
let resultado8: number = converterPolegadasParaCentimetros(num10);

function converterPolegadasParaCentimetros(polegadas:number) {
    return polegadas * 2.54;
}
alert('o numero digitado de polegadas para cm é: '+resultado8);


