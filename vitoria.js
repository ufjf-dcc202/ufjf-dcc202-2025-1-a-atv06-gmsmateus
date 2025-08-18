// vitoria.js
import{ getTabuleiro } from "./restaUm";

export function verificaVitoria(){
    const tab = getTabuleiro();
    const restantes = tab.filter(c => c.valida && c.ocupado);
    return restantes.length === 1;
}