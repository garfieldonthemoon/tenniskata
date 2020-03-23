import { TennisGame } from "../src/tennisGame";
import { using } from "jasmine-test-cases";
import { GameSetupHelper } from "../tests/gameSetupHelper";

describe('winning status is determined correctly', function() {
    using('A', 'B', 2, 1, false, 'game is on').
        it('if game is still on', 
            (playerOne: string, playerTwo: string, scorePlayerOne: number, scorePlayerTwo: number, expectedWinStatus: boolean, expectedWinMessage: string) => 
        {
            //arrange
            let game = new TennisGame(playerOne, playerTwo);
            GameSetupHelper.setScoreForGame(game, scorePlayerOne, scorePlayerTwo);

            //act
            let result = game.getWinStatus();

            //assert
            expect(result.isFinished).toBe(expectedWinStatus);
            expect(result.message).toBe(expectedWinMessage);
        });
});