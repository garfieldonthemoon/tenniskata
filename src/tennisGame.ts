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
                ? `${this.scoreMap[this.scorePlayerOne]}-${this.scoreMap[this.scorePlayerTwo]} for ${this.playerOne}`
                : `${this.scoreMap[this.scorePlayerTwo]}-${this.scoreMap[this.scorePlayerOne]} for ${this.playerTwo}`;
        }
        if (this.scorePlayerOne >= 3)
            return 'deuce';
        return `${this.scoreMap[this.scorePlayerOne]}-all`;
    }
}