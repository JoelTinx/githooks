import { add, substraction } from "../src/index.js";

describe("test index", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should substract two numbers", () => {
    expect(substraction(3, 2)).toBe(1);
  });
});