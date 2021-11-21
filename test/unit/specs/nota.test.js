const Nota = require("../../../src/models/nota");

describe("Calculo da média final", () => {
  test("a media é zero se não tem notas", () => {
    let nota = new Nota(null, 0, 0, 0);
    expect(nota.mediaFinal()).toEqual(0);
    nota = new Nota(null, null, null, null);
    expect(nota.mediaFinal()).toEqual(0);
  });

  test("a média é (0.4 * a1) + (0.6 * a2) se tem apenas a1 e a2", () => {
    let nota = new Nota(null, 3, 5, null);
    expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
    nota = new Nota(null, 7, 4, null);
    expect(nota.mediaFinal()).toEqual(0.4 * 7 + 0.6 * 4);
  });

  test("a média é (0.4 * a3) + (0.6 * a2) se a3 substitui a1", () => {
    let nota = new Nota(null, 0, 5, 3);
    expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
    nota = new Nota(null, 2, 5, 3);
    expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
    nota = new Nota(null, 2, 5, 6);
    expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
  });

  test("a média é (0.4 * a1) + (0.6 * a3) se a3 substitui a2", () => {
    let nota = new Nota(null, 6, 0, 5);
    expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
    nota = new Nota(null, 6, 4, 5);
    expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
    nota = new Nota(null, 6, 4, 7);
    expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 7);
  });

  it("shold it mention SS - Superior", () => {
    let nota = new Nota(null, 9, 9, 9);
    expect(nota.mediaCA(nota.mediaFinal())).toBe("SS – Superior");
  });

  it("shold it mention MS – Médio Superior", () => {
    let nota = new Nota(null, 7, 7, 7);
    expect(nota.mediaCA(nota.mediaFinal())).toBe("MS – Médio Superior");
  });

  it("shold it mention MM – Médio", () => {
    let nota = new Nota(null, 5.5, 5.5, 5.5);
    expect(nota.mediaCA(nota.mediaFinal())).toBe("MM – Médio");
  });

  it("shold it mention MI – Médio Inferior", () => {
    let nota = new Nota(null, 3, 3, 3);
    expect(nota.mediaCA(nota.mediaFinal())).toBe("MI – Médio Inferior");
  });

  it("shold it mention II – Inferior", () => {
    let nota = new Nota(null, 2, 2, 2);
    expect(nota.mediaCA(nota.mediaFinal())).toBe("II – Inferior");
  });

  it("shold it mention SR – Sem rendimento", () => {
    let nota = new Nota(null, 0, 0, 0);
    expect(nota.mediaCA(nota.mediaFinal())).toBe("SR – Sem rendimento");
  });
});
