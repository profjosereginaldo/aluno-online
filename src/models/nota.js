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

    mediaCA() {
        const media =  Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        )
        if (media >= 0 && media < 1){
            return "SR";
        }else if (media >= 1 && media < 2.99 ){
            return "II";
        }else if (media >= 3 && media < 4.99 ){
            return "MI";
        }else if (media >= 5 && media < 6.99 ){
            return "MM";
        }else if (media >= 7 && media < 8.99 ){
            return "MS";
        }else {return "SS"}

    }
}

module.exports = Nota;
