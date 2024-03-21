function perguntaEObriga(pergunta: string, resposta1: string, resposta2: string, resposta3: string): string {
    let resposta: string | null;
    resposta = prompt(pergunta);
    while (resposta?.toLocaleLowerCase() != resposta1 && resposta?.toLocaleLowerCase() != resposta2 && resposta?.toLocaleLowerCase() != resposta3) {
        alert('Resposta inválida');
        resposta = prompt(pergunta);
    }
    return resposta.toLocaleLowerCase();
}

let jogarnovamente: boolean = true;

while (jogarnovamente) {
    let respostaD1: string = perguntaEObriga('Andando por uma floresta mágica em busca de sua capivara modificada você encontra uma pirâmide de onde vem um latido idêntico ao dela. Deseja entrar na pirâmide?\nOpções:\n1 - Sim\n2 - Encerrar o jogo', 'sim', 'encerrar o jogo', 'nao');

    if (respostaD1 === 'sim') {
        let respostaD2: string = perguntaEObriga('Entrando na pirâmide você escuta o latido aumentar. Então você chama por sua capivara e escuta passos vindo em sua direção, mas ao lado da porta você avista um baú. Deseja abrir?\nOpções:\n1 - Sim\n2 - Não\n3 - Sair', 'sim', 'não', 'sair');
        
        if (respostaD2 === 'sim') {
            alert('Você abriu o baú e encontrou uma espada!');
            let respostaD3: string = perguntaEObriga('Os passos aumentam e de repente... UM MONSTRO!! Deseja enfrentá-lo?\nOpções:\n1 - Enfrentar\n2 - Correr', 'enfrentar', 'correr', '');
            
            if (respostaD3 === 'enfrentar') {
                let nivelDePoderMonstro: number = Math.floor(Math.random() * 10) + 1; // Aleatório de 1 a 10
                let nivelDePoderEspada: number = Math.floor(Math.random() * 10) + 1; // Aleatório de 1 a 10
                alert('Seu poder é '+nivelDePoderEspada+' e O poder do Monstro é '+nivelDePoderMonstro)

                if (nivelDePoderEspada <= nivelDePoderMonstro) {
                    alert('Seu poder era inferior ao do monstro. Você morreu!');

                } else {
                    alert('Você ataca o monstro e o derrota!');
                    alert('Você derrotou o grande monstro e escuta sua capivara latindo em sua direção!');
                    let respostaF1: string = perguntaEObriga('O castelo começa a desmoronar, então você e sua capivara começam a correr para a porta principal. No caminho você encontra uma moto e um triciclo. Qual você deseja usar?\nOpções:\n1 - Moto\n2 - Triciclo\n3 - Correr', 'moto', 'triciclo', 'correr');
                    
                    if (respostaF1 === 'moto') {
                        alert('A moto estava sem gasolina. Você morreu!');

                    } else if (respostaF1 === 'triciclo') {
                        alert('Você começa a pedalar como se não houvesse amanhã e enfim chega à saída. Parabéns, você salvou sua capivara!');

                    } else if (respostaF1 === 'correr') {
                        alert('Lento demais. Você morreu!');
                    }

                }


            } else if (respostaD3 === 'correr') {
                alert('Você corre pelo caminho que o monstro saiu e ele começa a te seguir.');
                let respostaD4: string = perguntaEObriga('Você quer correr para onde?\nOpções:\n- Norte\n- Sul\n- Leste', 'norte', 'sul', 'leste');

                if (respostaD4 === 'sul') {
                    alert('Você encontrou uma aldeia de canibais e eles te comeram!!! Você morreu!');

                } else if (respostaD4 === 'norte') {
                    alert('Parabéns, você encontrou uma colônia segura e viveu feliz para sempre.');

                } else if (respostaD4 === 'leste') {
                    alert('Você encontra sua capivara e fogem para o leste! voçê retorna para casa com sua capivara modificada.');
                    alert('Se passam dias!!!');
                    let respostaD7: string = perguntaEObriga('Você acha estranho os comportamentos dela ultimamente!! O que voçê faz?\nOpções:\n- investigar', 'investigar', ' ', ' ')
                    if (respostaD7 === 'investigar') {
                        alert('Você decide investigar a estranheza em torno da capivara.');
                        let respostaD8: string = perguntaEObriga('Você encontra um baú, abrir?\nOpções:\n- sim\n- não', 'sim', 'não', ' ')
                        if (respostaD8 == 'sim'){
                            alert('Ao abrir encontrar um mapa riscado e varias cartas de odio de sua capivara!');
                            alert('você descobre que a sua capivara foi quem planejou tudo! para tentar te matar!');
                            alert('Você é pego pela capivara modifica e ela te mata com um tiro de fuzil!!!!');
                        }else if(respostaD8 == 'não'){
                            alert('Voçê decide nao abrir e segue sua vida normal!');
                            alert('voçê morre dias após envenenado!!')
                        }
                    }
                }

            }

        } else if (respostaD2 === 'não') {
            alert('Você não abre o baú e os passos aumentam.');
            let respostaD4: string = perguntaEObriga('Os passos aumentam e de repente... UM MOSTRO!! Você está desarmado, o que deseja fazer?\nOpções:\n1 - Esconder\n2 - Disfarçar\n3 - Esperar', 'esconder', 'disfarçar', 'esperar');
            let i: number = 0;

            while(respostaD4 == 'esperar'){
                i++
                console.log(i)

                if (i == 3){
                    alert('voçê esperou e esperou e O MONSTRO te pegou!!!... Você morreu!!')
                    break
                }

                if (respostaD4 === 'esperar') {
                    alert('POR QUE VOCÊ FARIA ISSO?? O BICHO VAI TE PEGAR');
                    respostaD4 = perguntaEObriga('O MOSTRO!! Você está desarmado, o que deseja fazer?\nOpções:\n1 - Esconder\n2 - Disfarçar\n3 - Esperar', 'esconder', 'disfarçar', 'esperar');
                }

            }

            if (respostaD4 === 'esconder') {
                alert('Você se escondeu e esperou o mostro passar, mas infelizmente seu chinelo com um prego fez barulho, ele te encontrou.');

            } else if (respostaD4 === 'disfarçar') {
                alert('Você se disfarça de um mini monstro, então o mostro que pensa ser sua mãe deixa você passar por aquele momento.');
                alert('Você passou pelo monstro e avistou sua capivara!');
                let respostaF2: string = perguntaEObriga('Você leva sua capivara até a saída, mas encontra o monstro dormindo. O que fazer?\nOpções:\n1 - Silêncio\n2 - Correr\n3 - Aviso', 'silêncio', 'correr', 'aviso');
                
                if (respostaF2 === 'silêncio') {
                    alert('Você passou silenciosamente perto do mostro, mas sua capivara modificada começa a rosnar. Ele acordou e você morreu!');
                
                } else if (respostaF2 === 'correr') {
                    alert('Você passa correndo e o mostro começa a te perseguir, mas você tropeça. O mostro te pegou, você morreu!');
                
                } else if (respostaF2 === 'aviso') {
                    alert('Você avisa à sua mãe monstro que vai sair para brincar lá fora e ela permite. Você consegue sair da pirâmide!');
                
                }
            
            }

        } else if (respostaD2 === 'sair') {
            alert('Você abandonou sua capivara, merece a morte.');
            alert('Você foi amaldicioado e morreu!!')
        }

        let respostaD6 = prompt('Deseja jogar novamente? (sim/não)');
        
        if (respostaD6?.toLocaleLowerCase() == 'sim') {
            jogarnovamente = true;

        }else if (respostaD6 == 'não'){
            jogarnovamente = false
            break

        }
    }

    if (respostaD1.toLocaleLowerCase() === 'encerrar o jogo') {
        alert('Você escolheu encerrar o jogo.');
        jogarnovamente = false
    }
    
}