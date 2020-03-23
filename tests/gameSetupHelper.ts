import { TennisGame } from "../src/tennisGame";

export class GameSetupHelper {
    public static setScoreForGame(game: TennisGame, scorePlayerOne: number, scorePlayerTwo: number) {
        for (let i = 0; i < scorePlayerOne; i++) {
            game.ballForPlayerOne();
        }
        for (let i = 0; i < scorePlayerTwo; i++) {
            game.ballForPlayerTwo();
        }
    }
}