import { getTabuleiro } from "./restaUm.js";

export function verificaVitoria() {
    const tab = getTabuleiro();
    const pecas = tab.filter(p => p === 'preto'); // Filtra apenas as peças que existem
    return pecas.length === 1;
}