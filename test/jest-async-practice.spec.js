//reference: https://www.daleseo.com/jest-async/
describe('jest async test', () => {
  function fetchUser2(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('fetchUser2 wait 0.1 sec.')
        const user = {
          id: id,
          name: 'User' + id,
          email: id + '@test.com'
        }
        resolve(user)
      }, 100)
    })
  }

  // done 을 전달해서 비동기함수임을 알린다.
  test('fetch a user #1 setTimeout & cb', (done) => {
    function fetchUser1(id, cb) {
      setTimeout(() => {
        //log가 찍히는지 테스팅 타임이 100ms 넘게 나오는지 확인.
        console.log('fetchUser1 wait 0.1 sec.')
        const user = {
          id: id,
          name: 'User' + id,
          email: id + '@test.com'
        }
        cb(user)
      }, 100)
    }

    fetchUser1(1, (user) => {
      expect(user).toEqual({
        id: 1,
        name: 'User1',
        email: '1@test.com'
      })
      done()
    })
  })

  test('fetch a user #2 Promise', () => {
    //Promise 리턴하는 함수 테스트 방법. return 을 붙여준다.
    return fetchUser2(1).then((user) => {
      expect(user).toEqual({
        id: 1,
        name: 'User1',
        email: '1@test.com'
      })
    })
  })

  test('fetch a user #3 async await', async () => {
    const user = await fetchUser2(1)
    expect(user).toEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com'
    })
  })
})
