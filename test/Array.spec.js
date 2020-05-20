describe('Array test', () => {
  test('Array.of() #1', () => {
    expect(Array.of(7).length).toEqual(1);
  });
  test('Array.of() #2', () => {
    expect(Array.of(7)).not.toEqual(Array(7));
  });
});