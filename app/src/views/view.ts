export abstract class View<T> {
  //não pode criar uma instância diretamente de uma classe abstsrata
  protected elemento: HTMLElement;
  //protected permite que os filhos vejam o elemento, mas não será visto na instanciação

  //? serve pra colocar o parâmetro como opcional, opcional não funciona como primeiro parâmetro, e precisa sempre ficar por último
  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw new Error(`Seletor ${seletor} não existe!`);
    }

    //o parâmetro é opcional , mas se não for definido, ficará undefined
    // if (escapar) {
    //   this.escapar = escapar;
    // }
  }

  protected abstract template(model: T): string;
  //vai mostrar o erro em tempo de desenvolvimento no terminal, antes de mostrar no console da aplicação

  public update(model: T): void {
    let template = this.template(model);

    this.elemento.innerHTML = template;
  }
}
