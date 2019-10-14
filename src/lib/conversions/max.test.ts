import { encodeMax, decodeMax } from './max'

it('max', () => {
  const values = [
    [123n, 456n, 789n],
    [0n, 12n, 345n, 6789n],
    [1234n, 567n, 89n, 0n]
  ]

  for (const nums of values) {
    const str = encodeMax(nums)
    const _nums = decodeMax(str)
    expect(_nums).toEqual(nums)
  }
})
