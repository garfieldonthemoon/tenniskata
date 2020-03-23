import { TennisGame } from "../src/tennisGame";
import { using } from "jasmine-test-cases";

describe('scoring is accurate for', function() {
    using(0, 0, 'love-all').
        it('0-0', function(scorePlayerLeft, scorePlayerRight, expectedScoring) {
            let result = new TennisGame().getScoring();
            expect(result).toBe(expectedScoring);
        });
});