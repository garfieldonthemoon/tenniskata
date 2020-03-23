export class TennisGame {
    scoreMap: { [id: number]: string } = {
        0: "love",
        15: "fifteen",
        30: "thirty"
    };
    scorePlayerLeft: number;
    scorePlayerRight: number;

    public setScorePlayerLeft(newScore: number) {
        this.scorePlayerLeft = newScore;
    }

    public setScorePlayerRight(newScore: number) {
        this.scorePlayerRight = newScore;
    }

    public getScoring(): string {
        if (this.scorePlayerLeft == 40)
            return 'deuce';
        return `${this.scoreMap[this.scorePlayerLeft]}-all`;
    }
}