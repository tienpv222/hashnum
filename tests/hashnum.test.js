const Hashnum = require('../lib')

describe('Encode returns shortest method', () => {
  it('maxEncode', () => {
    const nums = [1, 23, 4, 56, 7, 89]
    const str = Hashnum.maxEncode(nums)
    const res = Hashnum.encode(nums)
    expect(res).toEqual(str)
  })

  it('lenEncode', () => {
    const nums = [1, 23, 456, 7890]
    const str = Hashnum.lenEncode(nums)
    const res = Hashnum.encode(nums)
    expect(res).toEqual(str)
  })
})

describe('Created instance works', () => {
  const hashnum = new Hashnum()
  const nums = [1, 23, 4, 56, 7, 89]

  it('Custom table', () => {
    hashnum.table = '!@#$%'
    expect(hashnum.decode(hashnum.maxEncode(nums))).toEqual(nums)
    expect(hashnum.decode(hashnum.lenEncode(nums))).toEqual(nums)

    hashnum.table = ''
    expect(hashnum.decode(hashnum.maxEncode(nums))).toEqual(nums)
    expect(hashnum.decode(hashnum.lenEncode(nums))).toEqual(nums)
  })

  it('Decode output string', () => {
    hashnum.strOutput = true
    expect(hashnum.decode(hashnum.maxEncode(nums)))
      .toEqual(nums.map(e => String(e)))
    expect(hashnum.decode(hashnum.lenEncode(nums)))
      .toEqual(nums.map(e => String(e)))

    hashnum.strOutput = false
    expect(hashnum.decode(hashnum.maxEncode(nums))).toEqual(nums)
    expect(hashnum.decode(hashnum.lenEncode(nums))).toEqual(nums)
  })

  it('Decode output string explicitly', () => {
    expect(hashnum.decode(hashnum.maxEncode(nums), true))
      .toEqual(nums.map(e => String(e)))
    expect(hashnum.decode(hashnum.lenEncode(nums), true))
      .toEqual(nums.map(e => String(e)))
  })

  it('Encode gives same result as static function', () => {
    expect(hashnum.encode(nums)).toEqual(Hashnum.encode(nums))
    expect(hashnum.maxEncode(nums)).toEqual(Hashnum.maxEncode(nums))
    expect(hashnum.lenEncode(nums)).toEqual(Hashnum.lenEncode(nums))
  })
})
