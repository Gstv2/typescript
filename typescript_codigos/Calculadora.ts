let numero1:number = verificarValor('digite um numero');
let numero2:number = verificarValor('digite um numero');

let resulta:number |null;
let sistema:boolean = false;
while(!sistema){
    let opcao:string = verificarOpção('Escolha a operação que deseja: \n1- soma\n2- subtração\n3- multiplicação\n4- divisão\n0- Sair');
    switch(opcao){
        case "1":
            resulta = somar(numero1,numero2);
            alert('Seu resultado é: '+resulta);
            break;
        case "2":
            resulta = subitração(numero1,numero2);
            alert('Seu resultado é: '+resulta);
            break;
        case "3":
            resulta = multiplicacao(numero1,numero2);
            alert('Seu resultado é: '+resulta);
            break;
        case "4":
            resulta = divisão(numero1,numero2);
            alert('Seu resultado é: '+resulta);
            break;
        case "0":
            sistema = true;
    }
    
}

function verificarOpção(pergunta:string){
    let resposta:string | null;
    resposta = prompt(pergunta)
    while (resposta != "1" && resposta != "2" && resposta != "3" && resposta != "4" && resposta != "0") {
        alert('Resposta inválida');
        resposta = prompt(pergunta);
    }
    return resposta;
}

function verificarValor(pergunta:string):number{
    let resposta: number | null; 
    resposta = Number(prompt(pergunta));
    while (isNaN(resposta)){
        alert('Resposta inválida'); 
        resposta = Number(prompt(pergunta)); 
    }

    return resposta;
}


function somar(numero1:number,numero2:number){
    return numero1 + numero2;
}
function subitração(numero1:number,numero2:number){
    return numero1 - numero2;
}
function multiplicacao(numero1:number,numero2:number){
    return numero1 * numero2;
}
function divisão(numero1:number,numero2:number){
    return numero1 / numero2;
}

