import { TennisGame } from "../src/tennisGame";
import { using } from "jasmine-test-cases";

describe('scoring is accurate for', function() {
    using(0, 0, 'love-all').
    using(1, 1, 'fifteen-all').
    using(2, 2, 'thirty-all').
        it('equal scores up to 30', function(scorePlayerOne, scorePlayerTwo, expectedScoring) {
            //arrange
            let game = new TennisGame();
            setScores(game, scorePlayerOne, scorePlayerTwo);

            //act
            let result = game.getScoring();

            //assert
            expect(result).toBe(expectedScoring);
        });

        using(3, 3, 'deuce').
        using(4, 4, 'deuce').
            it('equal scores from 40 up', function(scorePlayerOne, scorePlayerTwo, expectedScoring) {
                //arrange
                let game = new TennisGame();
                setScores(game, scorePlayerOne, scorePlayerTwo);

                //act
                let result = game.getScoring();

                //assert
                expect(result).toBe(expectedScoring);
            });

    function setScores(game: TennisGame, scorePlayerOne: number, scorePlayerTwo: number) {
        for (let i = 0; i < scorePlayerOne; i++) {
            game.ballForPlayerOne();
        }
        for (let i = 0; i < scorePlayerTwo; i++) {
            game.ballForPlayerTwo();
        }
    }
});