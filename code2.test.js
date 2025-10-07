import { findOdd } from "./code2";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("findOdd", () => {
    it("should return the integer that appears an odd number of times", () => {
        const input = [1, 1, 2, 2, 3];
        const expectedOutput = 3;
        expect(findOdd(input)).to.equal(expectedOutput);
    });

    it("should  single element arrays", () => {
        const input = [7];
        const expectedOutput = 7;
        expect(findOdd(input)).to.equal(expectedOutput);
    });

});