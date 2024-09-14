import { View } from './view.js';
export class MensagemView extends View {
    //sobrescrevendo o método template
    template(model) {
        return `
    <p class"alert alert-info">${model}</p>
    `;
    }
}
