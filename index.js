'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div); // buscar o elemento container e adicionar um filho DIV 
}

const exibir = (sons) => 
    Object.keys(sons).forEach(criarDiv); // retorna array com todas as letras e depois pegar cada um e criar um div (forEach(criarDiv))

const tocarSom = (letra) => {
    const audio = new Audio (`./sounds/${sons[letra]}`); // usa-se crase no lugar de aspa simpls pois é uma templade string
    audio.play();
}

const adicionarEfeito = (letra) => document.getElementById(letra) // receber a letra e pegar a DIV
                                           .classList.add('active'); // adiconar uma lista na letra

const removerEfeito = (letra) =>  {  // esperar o efeito acabar para remover o amarelo div
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend',removeActive);
} ;                         

const ativarDiv = (evento) => {
    const letra = evento.target.id; // armazenar na variavel o target buscado pelo id do evento
    const letraPermitida = sons.hasOwnProperty(letra); 
    if (letraPermitida){    // validar se a letra for permitida pra tocar o som e nao pegar do container
        adicionarEfeito(letra); // assim que clicar vai adicionar efeito
        tocarSom(letra);
        removerEfeito(letra); //remover o efeito que fica clicado
    }
}

exibir(sons);
document.getElementById('container')
        .addEventListener('click', ativarDiv); //quando clicar no container vai ativar a div

window.addEventListener('keydown', ativarDiv);