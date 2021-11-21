class Nota {
  constructor(disciplina, a1, a2, a3) {
    this.disciplina = disciplina;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
  }

  mediaFinal() {
    return Math.max(
      0.4 * this.a1 + 0.6 * this.a2,
      0.4 * this.a1 + 0.6 * this.a3,
      0.4 * this.a3 + 0.6 * this.a2
    );
  }

  mediaCA(nota) {
    if (nota >= 9) {
      return "SS – Superior";
    } else if (nota >= 7 && nota < 9) {
      return "MS – Médio Superior";
    } else if (nota >= 5 && nota < 7) {
      return "MM – Médio";
    } else if (nota >= 3 && nota < 5) {
      return "MI – Médio Inferior";
    } else if (nota > 0 && nota < 3) {
      return "II – Inferior";
    } else if (nota === 0) {
      return "SR – Sem rendimento";
    }
  }
}

module.exports = Nota;
