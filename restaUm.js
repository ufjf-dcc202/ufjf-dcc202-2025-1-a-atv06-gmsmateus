const tabuleiro = [
    null, null, 'preto', 'preto', 'preto', null, null,
    null, null, 'preto', 'preto', 'preto', null, null,
    'preto', 'preto', 'preto', 'preto', 'preto', 'preto', 'preto',
    'preto', 'preto', 'preto', '', 'preto', 'preto', 'preto',
    'preto', 'preto', 'preto', 'preto', 'preto', 'preto', 'preto',
    null, null, 'preto', 'preto', 'preto', null, null,
    null, null, 'preto', 'preto', 'preto', null, null,
];

let seleciona = null;

export function getTabuleiro() {
    return [...tabuleiro];
}

export function getSelecionado() {
    return seleciona;
}

export function selecionado(posicao) {
    if (seleciona === null && tabuleiro[posicao] === 'preto') {
        seleciona = posicao;
    }
    else if (seleciona === posicao) {
        seleciona = null;
    }
    else if (seleciona !== null) {
        mover(seleciona, posicao);
        seleciona = null;
    }
}

function mover(origem, destino) {
    if (tabuleiro[origem] !== 'preto' || tabuleiro[destino] !== '') {
        return;
    }
    const linhaOrigem = Math.floor(origem / 7);
    const colOrigem = origem % 7;
    const linhaDestino = Math.floor(destino / 7);
    const colDestino = destino % 7;

    const dLinha = Math.abs(linhaDestino - linhaOrigem);
    const dCol = Math.abs(colDestino - colOrigem);

    if ((dLinha === 2 && dCol === 0) || (dLinha === 0 && dCol === 2)) {
        let meio;
        if (dLinha === 2) { 
            meio = origem + (linhaDestino > linhaOrigem ? 7 : -7);
        } else { 
            meio = origem + (colDestino > colOrigem ? 1 : -1);
        }
        if (tabuleiro[meio] === 'preto') {
            tabuleiro[destino] = tabuleiro[origem];
            tabuleiro[origem] = '';
            tabuleiro[meio] = '';
        }
    }
}