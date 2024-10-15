let escolhaJogador1 = null;
let escolhaJogador2 = null;

function escolher(jogador, escolha) {
    if (jogador === 1) {
        escolhaJogador1 = escolha;
    } else if (jogador === 2) {
        escolhaJogador2 = escolha;
    }

    // Só determina o vencedor se ambos os jogadores tiverem feito suas escolhas
    if (escolhaJogador1 && escolhaJogador2) {
        const resultado = determinarVencedor(escolhaJogador1, escolhaJogador2);
        document.getElementById('vencedor').innerText = resultado;

        // Aguarda um tempo para mostrar o resultado antes de reiniciar o jogo
        setTimeout(() => {
            reiniciarJogo();
        }, 3000); // 3000 ms = 3 segundos (ajuste conforme desejar)
    }
}

function determinarVencedor(escolha1, escolha2) {
    if (escolha1 === escolha2) {
        return 'Empate!';
    } else if (
        (escolha1 === 'pedra' && escolha2 === 'tesoura') ||
        (escolha1 === 'papel' && escolha2 === 'pedra') ||
        (escolha1 === 'tesoura' && escolha2 === 'papel')
    ) {
        return 'Jogador 1 vence!';
    } else {
        return 'Jogador 2 vence!';
    }
}

function reiniciarJogo() {
    // Limpa as escolhas para permitir uma nova rodada
    escolhaJogador1 = null;
    escolhaJogador2 = null;

    // Limpa a mensagem do resultado
    document.getElementById('vencedor').innerText = '';

}
