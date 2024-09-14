export class View {
    //protected permite que os filhos vejam o elemento, mas não será visto na instanciação
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //vai mostrar o erro em tempo de desenvolvimento no terminal, antes de mostrar no console da aplicação
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
