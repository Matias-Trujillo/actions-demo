const sum = require('./sum');

test('Suma dos números', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Suma de números negativos', () => {
  expect(sum(-2, -3)).toBe(-5);
});
