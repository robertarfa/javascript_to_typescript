import { domInjector } from '../decorators/dom-injection.js';
import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesService } from '../services/negociacoes-service.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');
  private negociacaoService = new NegociacoesService();

  constructor() {
    //de acordo com o id do html
    // this.inputData = document.querySelector('#data') as HTMLInputElement;
    // this.inputQuantidade = document.querySelector(
    //   '#quantidade'
    // ) as HTMLInputElement;
    // this.inputValor = <HTMLInputElement>document.querySelector('#valor');

    this.negociacoesView.update(this.negociacoes);
  }

  @logarTempoDeExecucao()
  @inspect
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update('Apenas negociações em dias úteis são aceitas!');
      return;
    }

    this.negociacoes.adiciona(negociacao);
    this.atualizaView();
    this.limparFormulario();
  }

  private limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';

    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso!');
  }

  importarDados(): void {
    this.negociacaoService.obterNegociacoesDoDia().then((negociacoesDehoje) => {
      for (let negociacao of negociacoesDehoje) {
        this.negociacoes.adiciona(negociacao);
      }
      this.negociacoesView.update(this.negociacoes);
    });
  }

  private ehDiaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }
}
