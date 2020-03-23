import { TennisGame } from "../src/tennisGame";

export class GameSetupHelper {
    public static setScoreForGame(game: TennisGame, scorePlayerOne: number, scorePlayerTwo: number) {
        let counter = 0;
        while (true) {
            let isStillScoreToSet = false;
            if (counter < scorePlayerOne) {
                game.ballForPlayerOne();
                isStillScoreToSet = true;
            }
            if (counter < scorePlayerTwo) {
                game.ballForPlayerTwo();
                isStillScoreToSet = true;
            }

            counter++;

            if (!isStillScoreToSet)
                break;
        }
    }
}