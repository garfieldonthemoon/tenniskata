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

    constructor(playerOne: string, playerTwo: string) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }

    public ballForPlayerOne() {
        this.scorePlayerOne++;
    }

    public ballForPlayerTwo() {
        this.scorePlayerTwo++;
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
            "message": "game is on"
        }
    }

    private getScoreDescriptionForNonEqualScores(higherScore: number, lowerScore: number, higherScorePlayer: string): string {
        let scoreDescription =
            higherScore > 3
                ? 'advantage'
                : `${this.scoreMap[higherScore]}-${this.scoreMap[lowerScore]}`;

        return `${scoreDescription} for ${higherScorePlayer}`;
    }
}