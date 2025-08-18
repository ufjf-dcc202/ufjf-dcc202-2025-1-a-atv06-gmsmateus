import { getSelecionado, getTabuleiro, selecionado } from "./restaUm.js";
import { verificaVitoria } from "./vitoria.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "Resta Um";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);

atualizaTabuleiro();

function atualizaTabuleiro() {
    eTabuleiro.innerHTML = "";
    const tab = getTabuleiro();
    for (let i = 0; i < tab.length; i++) {
        const disco = criaDisco(tab[i], i);
        eTabuleiro.append(disco);

        if (getSelecionado() !== null && i === getSelecionado()) {
            disco.classList.add("selecionado");
        }
    }

    if (verificaVitoria()) {
        setTimeout(() => alert("Parabéns! Você venceu!"), 10);
    }
}

function clickNoTabuleiro(evento) {
    const target = evento.target;
    if (target.dataset.posicao) {
        const posicao = Number(target.dataset.posicao);
        selecionado(posicao);
        atualizaTabuleiro();
    }
}

function criaTabuleiro() {
    const div = document.createElement("div");
    div.classList.add("tabuleiro");
    div.addEventListener("click", clickNoTabuleiro);
    return div;
}

function criaDisco(cor, posicao) {
    const div = document.createElement("div");
    div.classList.add("disco");
    // Alteração importante aqui:
    div.dataset.cor = cor === null ? 'nulo' : (cor === '' ? 'vazio' : cor);
    div.dataset.posicao = posicao;
    return div;
}