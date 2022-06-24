const myRemove = require('./myRemove')

describe("Testando funcao myRemove, se retorna oque esperado",() => {
    it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
    });
});