import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');

  constructor() {
    //de acordo com o id do html
    this.inputData = document.querySelector('#data') as HTMLInputElement;
    this.inputQuantidade = document.querySelector(
      '#quantidade'
    ) as HTMLInputElement;
    this.inputValor = <HTMLInputElement>document.querySelector('#valor');
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

  private ehDiaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }
}
