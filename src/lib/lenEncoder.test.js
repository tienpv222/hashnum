const Hashnum = require('./index')

describe('Encoding returns empty string on invalid input:', () => {
  it('Null', () => {
    expect(Hashnum.maxEncode(null)).toEqual('')
    expect(Hashnum.maxEncode()).toEqual('')
  })

  it('Number', () => {
    [0, 1, 99].forEach(e => expect(Hashnum.maxEncode(e)).toEqual(''))
  })

  it('String', () => {
    ['', 'a', '99'].forEach(e => expect(Hashnum.maxEncode(e)).toEqual(''))
  })

  it('Object', () => {
    expect(Hashnum.maxEncode({})).toEqual('')
  })

  it('Negative number in array', () => {
    expect(Hashnum.maxEncode([-1])).toEqual('')
  })
})

describe('Decoding returns empty array on invalid input:', () => {
  it('Null', () => {
    expect(Hashnum.decode(null)).toEqual([])
    expect(Hashnum.decode()).toEqual([])
  })

  it('Number', () => {
    [0, 1, 99].forEach(e => expect(Hashnum.decode(e)).toEqual([]))
  })

  it('Object', () => {
    expect(Hashnum.decode({})).toEqual([])
  })

  it('Negative number in array', () => {
    expect(Hashnum.decode([])).toEqual([])
  })
})

describe('Encoding and decoding are matched on:', () => {
  it('Array of number', () => {
    const data = [1, 23, 456, 7890]
    const str = Hashnum.maxEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data)
  })

  it('Array with 0s in the front', () => {
    const data = [0, 0, 0, 1]
    const str = Hashnum.maxEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data)
  })

  it('Array of valid string', () => {
    const data = ['1', '23', '456', '7890']
    const str = Hashnum.maxEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data.map(e => Number(e)))
  })

  it('Array of mix string and number', () => {
    const data = ['0', 0, '0', 1]
    const str = Hashnum.maxEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data.map(e => Number(e)))
  })
})
