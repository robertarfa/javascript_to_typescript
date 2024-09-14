import { NegociacaoController } from './controllers/negociacao-controller.js';
import { NegociacoesView } from './views/negociacoes-view.js';

const negociacaoController = new NegociacaoController();

const form = document.querySelector('.form');
//todo element tem um addEventListener
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  negociacaoController.adiciona();
});
