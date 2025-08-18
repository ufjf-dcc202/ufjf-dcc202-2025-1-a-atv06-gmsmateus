
//main.js
import { getTabuleiro, getSelecionado, seleciona } from "./restaUm";
import {verificarVitoria} from "./disco";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);
atualizaTabuleiro();

function criaTabuleiro() {
    const div = document.createElement("div");
    div.classList.add("tabuleiro");
    return div;
}   

function atualizaTabuleiro() {
    eTabuleiro.innerHTML = "";
    const tab = getTabuleiro();
    for(let i=0; i<tab.length ;i++)
    {
        const casaInfo = tab[i];
        const div = document.createElement("div");
        div.classList.add("casa");

        div.dataset.posicao = i;
        div.dataset.valida  = casaInfo.valida;
        if(casaInfo.ocupado){
            div.dataset.ocupado = true;
    }
    if(getSelecionado() === i){
            div.dataset.selecionado = true;
        }

        div.addEventListener("click",(e)=>{
            seleciona(Number(e.target.dataset.posicao));
            atualizaTabuleiro();
        });

        eTabuleiro.append(div);
    }

    if(verificaVitoria()){
        setTimeout(() => alert("Parabéns! Você venceu!"), 10);
    }
}