const { fibonacci } = require("./fibonacci");

test("fibonacci(0) should return 0", () => {
  expect(fibonacci(0)).toBe(0);
});

test("fibonacci(1) should return 1", () => {
  expect(fibonacci(1)).toBe(1);
});

test("fibonacci(5) should return 5", () => {
  expect(fibonacci(5)).toBe(5);
});

test("fibonacci(10) should return 55", () => {
  expect(fibonacci(10)).toBe(55);
});
