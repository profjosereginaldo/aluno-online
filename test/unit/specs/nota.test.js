const Nota = require('./nota');

describe('Menção da média final', () => {
    test('SS caso a  nota for maior que 9', () => {
        const nota = new Nota(null, 10, 10, null);
        expect(nota.mediaCA()).toEqual("SS");
    });
    test(' MS caso a  nota for entre 7,0 e 8,9', () => {
        const nota = new Nota(null, 7, 7, null);
        expect(nota.mediaCA()).toEqual("MS");
    });
    test('MM caso a  nota for entre 5,0 e 6,9', () => {
        const nota = new Nota(null, 6, 6, null);
        expect(nota.mediaCA()).toEqual("MM");
    });
    test('MI caso a  nota for entre 3,0 e 4,9', () => {
        const nota = new Nota(null, 5, 3, null);
        expect(nota.mediaCA()).toEqual("MI");
    });
    test('II caso a  nota for entre 0,1 e 2,9', () => {
        const nota = new Nota(null, 3, 2, null);
        expect(nota.mediaCA()).toEqual("II");
    });
    test('SR caso a  nota for inferior a 0', () => {
        const nota = new Nota(null, 0, 0, null);
        expect(nota.mediaCA()).toEqual("SR");
    });

});

describe('Calculo da média final', () => {
    test('a media é zero se não tem notas', () => {
        let nota = new Nota(null, 0, 0, 0);
        expect(nota.mediaFinal()).toEqual(0);
        nota = new Nota(null, null, null, null)
        expect(nota.mediaFinal()).toEqual(0);
    });

    test('a média é (0.3 * a1) + (0.6 * a2) se tem apenas a1 e a2', () => {
        let nota = new Nota(null, 3, 5, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 7, 4, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 7 + 0.6 * 4);
    });

    test('a média é (0.4 * a3) + (0.6 * a2) se a3 substitui a1', () => {
        let nota = new Nota(null, 0, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 6);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
    });

    test('a média é (0.4 * a1) + (0.6 * a3) se a3 substitui a2', () => {
        let nota = new Nota(null, 6, 0, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 7);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 7);
    });
