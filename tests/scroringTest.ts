import { TennisGame } from "../src/tennisGame";
import { using } from "jasmine-test-cases";

describe('scoring is accurate for', function() {
    using(0, 0, 'love-all').
    using(15, 15, 'fifteen-all').
    using(30, 30, 'thirty-all').
        it('equal scores up to 30', function(scorePlayerLeft, scorePlayerRight, expectedScoring) {
            //arrange
            let game = new TennisGame();
            game.setScorePlayerLeft(scorePlayerLeft);

            //act
            let result = game.getScoring();

            //assert
            expect(result).toBe(expectedScoring);
        });
});