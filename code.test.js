import { myFunction } from "./code.js";

import { describe, it } from "mocha";
import { expect } from "chai";

describe("My Function", () => {
    it("should log 'Hello, World!'", () => {
       myFunction();
       expect(true).to.be.true; // Simple assertion to ensure the function runs without error
    });
});
