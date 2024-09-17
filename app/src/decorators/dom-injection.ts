export function domInjector(seletor: string) {
  //o target pega a propriedade da classe
  //esse decorator de propriedade é aplicado no momento de declaração da classe
  return function (target: any, propertyKey: string) {
    console.log(
      `Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`
    );

    //elemento vai ficar com cache e não vai buscar o valor a todo momento
    //closure => a função de dentro vai lembrar do escopo da função pai
    let elemento: HTMLElement;

    const getter = function () {
      console.log(`Elemento fora do escopo ${elemento}`);

      if (!elemento) {
        //<HTMLElement> pra assumir que isso nunca será nulo
        elemento = <HTMLElement>document.querySelector(seletor);
      }

      console.log(
        `Buscando elemento do  DOM com o seletor ${seletor} para injetar em ${propertyKey}`
      );
      return elemento;
    };

    console.log(target, propertyKey);

    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
