import { NegociacaoController } from './controllers/negociacao-controller.js';
const negociacaoController = new NegociacaoController();
const form = document.querySelector('.form');
//todo element tem um addEventListener
form.addEventListener('submit', (event) => {
    event.preventDefault();
    negociacaoController.adiciona();
});
