describe('Array test', () => {
  test('Array.of() #1', () => {
    expect(Array.of(7).length).toEqual(1);
  });
  test('Array.of() #2', () => {
    expect(Array.of(7)).not.toEqual(Array(7));
  });
  test('Eventhough Array.of(7) and other Array.of(7) is not the same using == and === in console, below shows same', () => {
    const testArr = Array.of(7)
    //toEqual은 properties 비교
    //toBe는 완전히 동일한지
    expect(Array.of(7)).toEqual(Array.of(7));
    expect(Array.of(7)).not.toBe(Array.of(7));
    expect(testArr).toBe(testArr)
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
  test('Array.fill()', () => {
    expect([1, 2, 3, 4].fill(0, 2, 3)).toEqual([1, 2, 0, 4])
    expect(Array(5).fill({name: 'shkyung'}, 0, 1)[0].name).toBe('shkyung')
  })

  test('Array.flat()', () => {
    expect([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].flat(Infinity)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect([1, 2, , 4, 5].flat().length).not.toBe(5)
  })

  test('Array.flatMap()', () => {
    const arr = ["it's Sunny in", "", "California"];
    expect(arr.map(x => x.split(" ")).flat()).toEqual(arr.flatMap(x => x.split(" ")))
  })

  test('Array.keys()', () => {
    const arr = ['a', , 'c'];
    expect([...arr.keys()]).toEqual([0, 1, 2])
    expect(arr.keys().next().value).toBe(arr.entries().next().value[0])
  })
})