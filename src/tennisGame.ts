export class TennisGame {
    scoreMap = [
        "love"
    ]

    public getScoring(): string {
        return `${this.scoreMap[0]}-all`;
    }
}