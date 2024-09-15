export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //O getter não pode ter o mesmo nome de uma propriedade incapsulada dentro da sua classe
    get data() {
        //dessa forma não será possivel atribuir uma nova data com SetDate
        //Assim fazemos o clone da data, o setDate irá modificar a referência e não o clone
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    //metodos estaticos podem ser chamados direto da classe
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
