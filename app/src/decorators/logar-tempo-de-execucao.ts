export function logarTempoDeExecucao() {
  //o target pode ser se o meu decorator está em cima de um método estático de uma classe, pode ser uma função conjuntora e se estiver no método que não é estático, ele vai ser o prototype.
  //propertyKey dá o nome do método como string que foi decorado.
  //descriptor sabe tudo sobre o método que queremos executar, que queremos modificar, ele tem uma referência para o método original.
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    //precisa guardar o método original antes de substituir
    const metodoOriginal = descriptor.value;
    //vai sobrescrever o comportamento
    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();

      //chamar o método original, quando chama () vc está chamando o this interno
      //o método this será apply(this, args)
      const retorno = metodoOriginal.apply(this, args);

      const t2 = performance.now();
      console.log(
        `Método: ${propertyKey}, 
        Tempo de execução: ${(t2 - t1) / 1000} segundos`
      );

      retorno;
    };

    return descriptor;
  };
}
