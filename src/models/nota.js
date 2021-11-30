class Nota {
        constructor(disciplina, a1, a2, a3) {
            this.disciplina = disciplina;
            this.a1 = a1;
            this.a2 = a2;
            this.a3 = a3;
            this.media = this.mediaFinal();
        }
    
        mediaFinal() {
            return Math.max(
                0.4 * this.a1 + 0.6 * this.a2, 
                0.4 * this.a1 + 0.6 * this.a3, 
                0.4 * this.a3 + 0.6 * this.a2
            );
        }
    
        mediaCA() {
            if (this.media >= 9.0) { return "SS" }
            else if (this.media >= 7.0) { return "MS" }
            else if (this.media >= 5.0) { return "MM" }
            else if (this.media >= 3.0) { return "MI" }
            else if (this.media >= 0.1) { return "II" }
            else { return "SR" };
        }
    
    }
    
    module.exports = Nota;
