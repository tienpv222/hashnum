import { toRemains, fromRemains } from './remains'

it('remains', () => {
  const values = [
    [123n, 4n],
    [1234n, 45n],
    [12345n, 456n],
    [123456n, 4567n]
  ]

  for (const [num, base] of values) {
    const remains = toRemains(num, base)
    const _num = fromRemains(remains, base)
    expect(num).toBe(_num)
  }
})
