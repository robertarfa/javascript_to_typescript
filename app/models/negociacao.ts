export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}
  //O getter não pode ter o mesmo nome de uma propriedade incapsulada dentro da sua classe

  public get data(): Date {
    //dessa forma não será possivel atribuir uma nova data com SetDate
    //Assim fazemos o clone da data, o setDate irá modificar a referência e não o clone
    const data = new Date(this._data.getTime());
    return data;
  }

  public get volume(): number {
    return this.quantidade * this.valor;
  }
}
