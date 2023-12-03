function checkNumder(n) {
  Number(n) >= Number.MAX_SAFE_INTEGER;
}

describe('1 test', () => {
  function sum(a, b) {
  if (checkNumder(a) || checkNumder(b)) {
    return Infinity;
  }
  return Number(a) + Number(b);
};

test('sum(0.1, 0.2)=0.3)', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

test('sum(0.2, 0.3)=0.5)', () => {
  expect(sum(0.2, 0.3)).toBeCloseTo(0.5);
});

test('sum(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)=Infinity', () => {
  expect(sum(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(Infinity);
});

test('sum(1, 4)=5', () => {
  expect(sum(1, 4)).toBe(5);
});

test('sum("1", "4")=5', () => {
  expect(sum("1", "4")).toBe(5);
});
});

