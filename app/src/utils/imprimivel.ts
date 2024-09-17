// não pode criar instancias da classe abstrata
//é obrigada a implementar os metodos
//cada classe só pode herdar uma vez
//por isso a saída é transformar em interface
//toda interface é publica e todo método é abstrato
export interface Imprimivel {
  paraTexto(): string;
}
