import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();

const form = document.querySelector('.form');
//todo element tem um addEventListener
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  controller.add();
});
