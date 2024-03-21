//Questao 01
let c : number = Number(prompt('digite a temperatura em C'));
alert('A temperatura em Fahrenheit é' + ((c*9/5)+32));

//Questao 02
let n : number = Number(prompt('digite um número'));
let resto = n % 2;
if(resto==0){
    alert('O número é par');
}else{
    alert('O número é impar');
}

//Questao 03
let n1 : number = Number(prompt('digite o número 1'));
let n2 : number = Number(prompt('digite o número 2'));
if(n1>n2){
    alert('O maior é o primeiro: ' + n1);
}else{
    alert('O maior é o segundo: ' + n2);
}

//Questao 04
let n3 : number = Number(prompt('digite um número'));
let i : number;
for(i = 0; i<=10 ; i++){
    console.log(n3+' x '+i+' = ' + (n3*i));
}

//Questao 05
let n4 : number = Number(prompt('digite um número'));
let eprimo : boolean = true;
for(i = 2; i<n4; i++){
    if(n4%i == 0){ //o número digitado é divisível por i
        eprimo = false;
    }
}
if(eprimo){
    alert('O número é primo');
}else{
    alert('O número digitado não é primo');
}

//Questao 06
let n5 : number = Number(prompt('digite um número'));
for(i = n5; i>=1; i--){
    console.log(i);
}

//Questao 07
let n6 : number = Number(prompt('digite um número'));
let resultado : number = 1;
for(i = 1 ; i<=n6 ; i++){
    resultado = resultado * i;
}
console.log('O fatorial de '+n6+' é: '+resultado);

//Questao 08
let n7 : number = Number(prompt('digite um número'));
let anterior : number = 1;
let anteriorDoAnterior : number = 0;
if(n7>=1){
    console.log('0');
}
if(n7>=2){
    console.log('1');
}
for(i=3;i<=n7;i++){
    let novo : number = anterior + anteriorDoAnterior;
    console.log(novo);
    anteriorDoAnterior = anterior;
    anterior = novo;
}

//Questao 09
let segredo:number = Math.floor(Math.random() * 100);
let terminou : boolean = false;
while(!terminou){
    let n8 : number = Number(prompt('digite um número'));
    if(n8<segredo){
        alert('Muito baixo! Tente novamente.')
    }
    if(n8>segredo){
        alert('Muito alto! Tente novamente.')
    }
    if(n8==segredo){
        alert('Correto! O número era '+segredo);
        terminou = true;
    }
}
