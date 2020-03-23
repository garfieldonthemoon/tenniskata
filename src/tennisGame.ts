export class TennisGame {
    scoreMap = [
        "love",
        "fifteen",
        "thirty",
        "fourty"
    ];
    scorePlayerOne: number = 0;
    scorePlayerTwo: number = 0;

    public ballForPlayerOne() {
        this.scorePlayerOne++;
    }

    public ballForPlayerTwo() {
        this.scorePlayerTwo++;
    }

    public getScoring(): string {
        if (this.scorePlayerOne == 3)
            return 'deuce';
        return `${this.scoreMap[this.scorePlayerOne]}-all`;
    }
}