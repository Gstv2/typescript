"use strict";
let jogarNovamente = true;
while (jogarNovamente) {
    let resposta = null;
    resposta = prompt('Você está em uma ilha misteriosa após um naufrágio. Você avista uma caverna e uma trilha na floresta.\nOpções:\n- Explorar a caverna\n- Seguir a trilha na floresta');
    while ((resposta === null || resposta === void 0 ? void 0 : resposta.toLocaleLowerCase()) !== 'explorar a caverna' && (resposta === null || resposta === void 0 ? void 0 : resposta.toLocaleLowerCase()) !== 'seguir a trilha na floresta') {
        alert('Resposta inválida');
        resposta = prompt('Você está em uma ilha misteriosa após um naufrágio. Você avista uma caverna e uma trilha na floresta.\nOpções:\n- Explorar a caverna\n- Seguir a trilha na floresta');
    }
    if ((resposta === null || resposta === void 0 ? void 0 : resposta.toLocaleLowerCase()) === 'explorar a caverna') {
        resposta = prompt('Dentro da caverna, você vê duas passagens. Uma à esquerda e outra à direita.\nOpções:\n- Seguir pela passagem à esquerda\n- Seguir pela passagem à direita');
        while ((resposta === null || resposta === void 0 ? void 0 : resposta.toLocaleLowerCase()) !== 'seguir pela passagem à esquerda' && (resposta === null || resposta === void 0 ? void 0 : resposta.toLocaleLowerCase()) !== 'seguir pela passagem à direita') {
            alert('Resposta inválida');
            resposta = prompt('Dentro da caverna, você vê duas passagens. Uma à esquerda e outra à direita.\nOpções:\n- Seguir pela passagem à esquerda\n- Seguir pela passagem à direita');
        }
        if ((resposta === null || resposta === void 0 ? void 0 : resposta.toLocaleLowerCase()) === 'seguir pela passagem à esquerda') {
            alert('Você encontra um tesouro perdido!');
        }
        else {
            alert('Você caiu em uma armadilha e foi capturado por canibais.');
        }
    }
    else {
        resposta = prompt('Você encontra uma cabana abandonada. Dentro dela, há comida e uma bússola.\nOpções:\n- Ficar na cabana e esperar por socorro\n- Pegar comida e bússola e explorar a ilha');
        while ((resposta === null || resposta === void 0 ? void 0 : resposta.toLocaleLowerCase()) !== 'ficar na cabana e esperar por socorro' && (resposta === null || resposta === void 0 ? void 0 : resposta.toLocaleLowerCase()) !== 'pegar comida e bússola e explorar a ilha') {
            alert('Resposta inválida');
            resposta = prompt('Você encontra uma cabana abandonada. Dentro dela, há comida e uma bússola.\nOpções:\n- Ficar na cabana e esperar por socorro\n- Pegar comida e bússola e explorar a ilha');
        }
        if (resposta.toLocaleLowerCase() === 'ficar na cabana e esperar por socorro') {
            alert('Você é resgatado alguns dias depois!');
        }
        else {
            alert('Explorando a ilha, você encontra uma tribo amigável que o ajuda a construir um barco para sair da ilha.');
        }
    }
    resposta = prompt('Deseja jogar novamente? (sim/não)');
    if ((resposta === null || resposta === void 0 ? void 0 : resposta.toLocaleLowerCase()) !== 'sim') {
        jogarNovamente = false;
    }
}
alert('Obrigado por jogar!');
