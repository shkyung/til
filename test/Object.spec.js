describe('Object test', () => {
  test('Object.assign() #1', () => {
    const target = { a: 1, b: 2 }
    const source = { b: 4, c: 5 }

    const result = Object.assign(target, source)

    expect(result).toEqual({ a: 1, b: 4, c: 5 })
    expect(target).toEqual({ a: 1, b: 4, c: 5 })
    expect(target).toBe(result)
  })
  test('Object.assign() #2 - shallow copy', () => {
    let obj1 = { a: 0, b: { c: 0 } }
    let obj2 = Object.assign({}, obj1)

    obj1.a = 1
    expect(obj2.a).toBe(0)
    obj1.b.c = 10
    expect(obj2.b.c).not.toBe(0)
    expect(obj2.b.c).toBe(10)
  })

  test('Object.assign() #3 - deep copy', () => {
    let obj1 = { a: 0, b: { c: 0 } }
    let obj2 = JSON.parse(JSON.stringify(obj1))
    obj1.a = 5
    obj1.b.c = 10
    expect(obj2.a).toBe(0)
    expect(obj2.b.c).toBe(0)
  })

  test('Object.entries()', () => {
    const obj = { foo: 'bar', baz: 42 }
    const ret = Object.entries(obj)
    expect(ret).toEqual([
      ['foo', 'bar'],
      ['baz', 42]
    ])
  })

  test('Object.freeze() & Object.isFrozen()', () => {
    const obj1 = { prop1: 42 }
    Object.freeze(obj1)

    obj1.prop2 = 30
    expect(obj1.prop2).toEqual(undefined)
    expect(Object.isFrozen(obj1)).toBeTruthy()
  })
})
