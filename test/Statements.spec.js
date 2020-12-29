describe('Statements test', () => {
  test('continue ', () => {
    let text = ''

    for (let i = 0; i < 10; i++) {
      if (i === 3) {
        continue
      }
      text += i
    }
    expect(text).toBe('012456789')
  })

  test('function* #1', () => {
    function* generator(i) {
      yield i
      yield i + 10
    }

    const gen = generator(10)

    expect(gen.next().value).toBe(10)
    expect(gen.next().value).toBe(20)
    expect(gen.next().value).toBeUndefined()
  })
})
