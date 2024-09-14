import { View } from './view.js';

export class MensagemView extends View<string> {
  //sobrescrevendo o método template
  template(model: string): string {
    return `
    <p class"alert alert-info">${model}</p>
    `;
  }
}
