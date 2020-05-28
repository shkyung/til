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
    expect([1, 2].concat([[3, 4], [5, 6]])).not.toContain(3);
    expect([1, 2].concat([[3, 4], [5, 6]])).toContain(1);
  })

  test('Array.copyWithin()', () => {
    expect(['a', 'b', 'c', 'd', 'e'].copyWithin(1, 2, 4)).toEqual(['a', 'c', 'd', 'd', 'e']);
    expect([1, 2, 3, 4, 5].copyWithin(-1)).toEqual([1, 2, 3, 4, 1]);
    expect([1, 2, 3, 4, 5].copyWithin(-4, -3, -1)).toEqual([1, 3, 4, 4, 5]);
    //start, end index 가 역순일 경우 동작하지 않는다.
    expect([1, 2, 3, 4, 5].copyWithin(-4, -1, -3)).toEqual([1, 2, 3, 4, 5]);
  })

  test('Array.entries()', () => {
    const fruits = ["Banana", "Orange"];
    const f = fruits.entries();
    expect(f.next().value).toEqual([0, "Banana"])
    expect(f.next().value).toEqual([1, "Orange"])
    expect(f.next().done).toBeTruthy()
  })
})