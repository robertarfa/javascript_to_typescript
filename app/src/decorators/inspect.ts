//se não precisar de parâmetros, chama o decorator direto
export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  //não pode usar arrow function pq o this não vai variar
  descriptor.value = function (...args: any[]) {
    console.log(
      `--- Método: ${propertyKey}, Parâmetros: ${JSON.stringify(args)}`
    );

    const retorno = metodoOriginal.apply(this, args);
    console.log(`--- Retorno: ${JSON.stringify(retorno)}`);
    return retorno;
  };

  return descriptor;
}
