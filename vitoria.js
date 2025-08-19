import { getTabuleiro } from "./restaUm.js";

export function verificaVitoria() {
    const tab = getTabuleiro();
    const pecas = tab.filter(p => p === 'preto');
    return pecas.length === 1;
}