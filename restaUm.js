//restaUm <=> disco.js, so para ficar mais claro
//criando o tabuleiro do jogo Resta Um, confesso que tive que usar IA para me ajudar a criar o tabuleiro inicial
const inicial=[
    -1,-1, 1, 1, 1,-1,-1,
    -1,-1, 1, 1, 1,-1,-1,
     1, 1, 1, 1, 1, 1, 1,
     1, 1, 1, 0, 1, 1, 1,
     1, 1, 1, 1, 1, 1, 1,
     -1,-1, 1, 1, 1,-1,-1,
     -1,-1, 1, 1, 1,-1,-1
]; //aqui é o tabuleiro inicial, com -1=espaço vazio, 0=disco vazio e 1=disco cheio

let tabuleiro= inicial.map(v=>({
    valida: v!==-1,
    ocupado: v===1,
}));

let selecionado = null; 
export function getTabuleiro() {
    return tabuleiro;
}

export function getSelecionado() {
    return selecionado;
}

export function setSelecionado(pos) 
{
    const casa = tabuleiro[pos];
    if(!casa.valida) return;
    if(selecionado === null) 
        {
        if(casa.ocupado) 
            {
            selecionado = pos;
        }
    }
    else
        {
        if(selecionado === pos) {
            selecionado = null;
        }
        else
        {
            mover(selecionado, pos);
            selecionado = null;
        }
    }
}

//Aqui também precisei de ajuda da IA para criar a lógica de movimentação do disco, não tinha consguido pensar nisso sozinho
//Peço desculpas se não podia usar IA, mas realmente não consegui pensar em como fazer a movimentação do disco
function mover(origem, destino) {
    const casaOrigem = tabuleiro[origem];
    const destinoCasa = tabuleiro[destino];

    if(!casaOrigem.ocupado || !destinoCasa.ocupado) 
        return;

    const dx = (destino % 7) - (origem % 7);
    const dy = Math.floor(destino / 7) - Math.floor(origem / 7);

    //movimentação horizontal
    if(dy === 0 && Math.abs(dx) === 2) {
        const meio = origem + dx / 2;
        if(tabuleiro[meio].ocupado) {
            tabuleiro[origem].ocupado = false;
            tabuleiro[meio].ocupado = false;
            tabuleiro[destino].ocupado = true;
        }
    }
    //movimentação vertical
    if(dx === 0 && Math.abs(dy) === 2) {
        const meio = origem + dy / 2 * 7;
        if(tabuleiro[meio].ocupado) {
            tabuleiro[origem].ocupado = false;
            tabuleiro[meio].ocupado = false;
            tabuleiro[destino].ocupado = true;
        }
    }
}