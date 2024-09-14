export abstract class View<T> {
  //não pode criar uma instância diretamente de uma classe abstsrata
  protected elemento: HTMLElement;
  //protected permite que os filhos vejam o elemento, mas não será visto na instanciação
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(model: T): string;
  //vai mostrar o erro em tempo de desenvolvimento no terminal, antes de mostrar no console da aplicação

  public update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
