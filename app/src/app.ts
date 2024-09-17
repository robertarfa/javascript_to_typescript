import { NegociacaoController } from './controllers/negociacao-controller.js';
import { NegociacoesView } from './views/negociacoes-view.js';

const negociacaoController = new NegociacaoController();

const form = document.querySelector('.form');

if (form) {
  //todo element tem um addEventListener
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    negociacaoController.adiciona();
  });
} else {
  throw Error(
    'Não foi possível inicializar a aplicação. Verifique se o form existe'
  );
}

const botaoImporta = document.querySelector('#botao-importa');

if (botaoImporta) {
  botaoImporta.addEventListener('click', () => {
    negociacaoController.importarDados();
  });
} else {
  throw Error('Botão importa não foi encontrado!');
}
