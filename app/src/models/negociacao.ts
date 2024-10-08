import { Modelo } from '../interfaces/modelo.js';

//extends herda de uma classe

export class Negociacao implements Modelo<Negociacao> {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}
  //O getter não pode ter o mesmo nome de uma propriedade incapsulada dentro da sua classe

  //metodos estaticos podem ser chamados direto da classe
  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(date, quantidade, valor);
  }
  public get data(): Date {
    //dessa forma não será possivel atribuir uma nova data com SetDate
    //Assim fazemos o clone da data, o setDate irá modificar a referência e não o clone
    const data = new Date(this._data.getTime());
    return data;
  }

  public get volume(): number {
    return this.quantidade * this.valor;
  }

  public paraTexto(): string {
    return `
    Data: ${this.data},
    Quantidade: ${this.quantidade},
    Valor: ${this.valor}`;
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() == negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }
}
