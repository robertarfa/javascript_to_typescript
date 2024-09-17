export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            console.log(`Elemento fora do escopo ${elemento}`);
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            console.log(`Buscando elemento do  DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            return elemento;
        };
        console.log(target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            get: getter,
        });
    };
}
//# sourceMappingURL=dom-injection.js.map