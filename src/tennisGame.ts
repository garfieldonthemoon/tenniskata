export class TennisGame {
    scoreMap: { [id: number]: string } = {
        0: "love",
        15: "fifteen"
    };
    score: number;

    public setScore(newScore: number) {
        this.score = newScore;
    }

    public getScoring(): string {
        return `${this.scoreMap[this.score]}-all`;
    }
}