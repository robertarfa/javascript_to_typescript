export class View {
    //protected permite que os filhos vejam o elemento, mas não será visto na instanciação
    //? serve pra colocar o parâmetro como opcional, opcional não funciona como primeiro parâmetro, e precisa sempre ficar por último
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        //o parâmetro é opcional , mas se não for definido, ficará undefined
        if (escapar) {
            this.escapar = escapar;
        }
    }
    //vai mostrar o erro em tempo de desenvolvimento no terminal, antes de mostrar no console da aplicação
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
