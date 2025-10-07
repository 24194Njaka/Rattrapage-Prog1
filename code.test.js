import { capitalizeNames } from "./code.js";



import { describe, it } from "mocha";
import { expect } from "chai";

describe("capitalizeNames", () => {
  it("should ", () => {
    const input = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const expectedOutput = ["John", "Jacob", "Jingleheimer", "Schmidt"];
    expect(capitalizeNames(input)).to.deep.equal(expectedOutput);

  });

});
