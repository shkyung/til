describe('Array test', () => {
  test('Array.of() #1', () => {
    expect(Array.of(7).length).toEqual(1);
  });
  test('Array.of() #2', () => {
    expect(Array.of(7)).not.toEqual(Array(7));
  });
  test('Eventhough Array.of(7) and other Array.of(7) is not the same using == and === in console, below shows same', () => {
    expect(Array.of(7)).toEqual(Array.of(7));
  })
  test('Array.isArray() & Array.from()', () => {
    const map = new Map([[1, 2], [2, 4], [4, 8]])
    const arr = Array.from(map)
    expect(Array.isArray(map)).toBeFalsy();
    expect(Array.isArray(arr)).toBeTruthy();
  })
  test('Array.concat()', () => {
    expect([1,2].concat([[3,4],[5,6]])).not.toContain(3);
    expect([1,2].concat([[3,4],[5,6]])).toContain(1);
  })
})