import { toString, fromString } from './string'

it('string', () => {
  const values = [
    123n,
    1234n,
    12345n,
    123456n
  ]

  for (const num of values) {
    const str = toString(num)
    const _num = fromString(str)
    expect(num).toBe(_num)
  }
})
