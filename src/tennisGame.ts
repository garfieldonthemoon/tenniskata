export class TennisGame {
    scoreMap = [
        "love",
        "fifteen",
        "thirty",
        "fourty"
    ];
    playerOne: string;
    playerTwo: string;
    scorePlayerOne: number = 0;
    scorePlayerTwo: number = 0;
    isGameFinished: boolean = false;
    winner: string;

    constructor(playerOne: string, playerTwo: string) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }

    public ballForPlayerOne() {
        this.scorePlayerOne++;
        this.checkIsGameWon();
    }

    public ballForPlayerTwo() {
        this.scorePlayerTwo++;
        this.checkIsGameWon();
    }

    public getScoring(): string {
        if (this.scorePlayerOne != this.scorePlayerTwo) {
            return this.scorePlayerOne > this.scorePlayerTwo 
                ? this.getScoreDescriptionForNonEqualScores(this.scorePlayerOne, this.scorePlayerTwo, this.playerOne)
                : this.getScoreDescriptionForNonEqualScores(this.scorePlayerTwo, this.scorePlayerOne, this.playerTwo);
        } else {
            return this.scorePlayerOne >= 3
                ? 'deuce'
                : `${this.scoreMap[this.scorePlayerOne]}-all`;
        }
    }
    public getWinStatus(): {isFinished: boolean, message: string} {
        return {
            "isFinished": this.isGameFinished,
            "message": this.isGameFinished ? `${this.winner} won` : "game is on"
        }
    }

    private getScoreDescriptionForNonEqualScores(higherScore: number, lowerScore: number, higherScorePlayer: string): string {
        let scoreDescription =
            higherScore > 3
                ? 'advantage'
                : `${this.scoreMap[higherScore]}-${this.scoreMap[lowerScore]}`;

        return `${scoreDescription} for ${higherScorePlayer}`;
    }

    private checkIsGameWon() {
        let scoreDifference = this.scorePlayerOne - this.scorePlayerTwo;

        if (scoreDifference >= 2 && this.scorePlayerOne >= 4) {
            this.isGameFinished = true;
            this.winner = this.playerOne;
        } else if (scoreDifference <= -2 && this.scorePlayerTwo >= 4) {
            this.isGameFinished = true;
            this.winner = this.playerTwo;
        }
    }
}