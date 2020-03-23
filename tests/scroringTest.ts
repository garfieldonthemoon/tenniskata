import { TennisGame } from "../src/tennisGame";
import { using } from "jasmine-test-cases";

describe('scoring is accurate for', function() {
    using('A', 'B', 0, 0, 'love-all').
    using('A', 'B', 1, 1, 'fifteen-all').
    using('A', 'B', 2, 2, 'thirty-all').
        it('equal scores up to 30', function(playerOne, playerTwo, scorePlayerOne, scorePlayerTwo, expectedScoring) {
            //arrange
            let game = new TennisGame(playerOne, playerTwo);
            setScores(game, scorePlayerOne, scorePlayerTwo);

            //act
            let result = game.getScoring();

            //assert
            expect(result).toBe(expectedScoring);
        });

    using('A', 'B', 3, 3, 'deuce').
    using('A', 'B', 4, 4, 'deuce').
    using('A', 'B', 24, 24, 'deuce').
    using('A', 'B', 249, 249, 'deuce').
        it('equal scores from 40 up', function(playerOne, playerTwo, scorePlayerOne, scorePlayerTwo, expectedScoring) {
            //arrange
            let game = new TennisGame(playerOne, playerTwo);
            setScores(game, scorePlayerOne, scorePlayerTwo);

            //act
            let result = game.getScoring();

            //assert
            expect(result).toBe(expectedScoring);
        });

    using('A', 'B', 1, 0, 'fifteen-love for A').
    using('A', 'B', 2, 0, 'thirty-love for A').
    using('A', 'B', 3, 0, 'fourty-love for A').
    using('A', 'B', 2, 1, 'thirty-fifteen for A').
    using('A', 'B', 3, 1, 'fourty-fifteen for A').
    using('A', 'B', 3, 2, 'fourty-thirty for A').
    using('A', 'B', 0, 1, 'fifteen-love for B').
    using('A', 'B', 0, 2, 'thirty-love for B').
    using('A', 'B', 0, 3, 'fourty-love for B').
    using('A', 'B', 1, 2, 'thirty-fifteen for B').
    using('A', 'B', 1, 3, 'fourty-fifteen for B').
    using('A', 'B', 2, 3, 'fourty-thirty for B').
        it('one player has more score up to 40', function(playerOne, playerTwo, scorePlayerOne, scorePlayerTwo, expectedScoring) {
            //arrange
            let game = new TennisGame(playerOne, playerTwo);
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