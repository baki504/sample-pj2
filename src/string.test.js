const { reverse } = require("./string");

test('reverse("hello") should return "olleh"', () => {
  expect(reverse("hello")).toBe("olleh");
});

test('reverse("") should return ""', () => {
  expect(reverse("")).toBe("");
});

test('reverse("a") should return "a"', () => {
  expect(reverse("a")).toBe("a");
});

test('reverse("12345") should return "54321"', () => {
  expect(reverse("12345")).toBe("54321");
});
