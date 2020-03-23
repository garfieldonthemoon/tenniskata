import { TennisGame } from "../src/tennisGame";

describe('scoring is accurate for', function() {
    it('0-0', function() {
        let result = new TennisGame().getScoring();
        expect(result).toBe("love-all");
    });
});