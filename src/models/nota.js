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
<<<<<<< HEAD
        if( mediaFinal >= 9  )
        return "SS - superior";
        
        else if( mediaFinal <= 8.9 && mediaFinal >= 7 )
        return "MS - Médio Superior";

        else if( mediaFinal <= 6.9 && mediaFinal >= 5.0 )
        return "MM - Médio ";

        else if( mediaFinal <= 4.9 & mediaFinal >= 5.0 )
        return "MI";

        else {  
        return "II"

        }

=======
        // to do fixs
        return "SS";
>>>>>>> 2ccc61971a2ca0d6d4489841da8ca49600f533f4
    }
}



module.exports = Nota;