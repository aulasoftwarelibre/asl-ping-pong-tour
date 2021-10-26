export class Match {
    private scorePlayer1: number;
    private scorePlayer2: number;
    private player1: string;
    private player2: string;
    
    constructor(player1: string, player2: string) {
        this.player1 = player1;
        this.player2 = player2;
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
      }
    
    setScorePlayer1(score: number) {
        this.scorePlayer1 = score;
    }

    setScorePlayer2(score: number) {
        this.scorePlayer2 = score;
    }
    
    setNamePlayer1(player1: string){
        this.player1 = player1;
    }
    
    setNamePlayer2(player2: string){
        this.player2 = player2;
    }

    getScorePlayer1(){return this.scorePlayer1;};
    getScorePlayer2(){return this.scorePlayer2;};
    
    getNamePlayer1(){return this.player1;};
    getNamePlayer2(){return this.player2;};

    // TODO : Funciones de suma, resta de puntos, tener en cuenta la diferencia de 2, funcion de score
    
}
