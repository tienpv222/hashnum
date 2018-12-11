const Hashnum = require('../lib')

describe('Encode returns empty string on invalid input:', () => {
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

describe('Decode returns empty array on invalid input:', () => {
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

  it('String contains char not from table', () => {
    expect(Hashnum.decode('abc*e')).toEqual([])
  })
})

describe('Encoding and decoding are matched on array:', () => {
  it('Of number', () => {
    const data = [1, 23, 456, 7890]
    const str = Hashnum.maxEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data)
  })

  it('Of valid string', () => {
    const data = ['1', '23', '456', '7890']
    const str = Hashnum.maxEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data.map(e => Number(e)))
  })

  it('Of mix string and number', () => {
    const data = ['0', 0, '0', 1]
    const str = Hashnum.maxEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data.map(e => Number(e)))
  })

  it('Start with 0', () => {
    const data = [0, 0, 0, 1]
    const str = Hashnum.maxEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data)
  })
})

describe('Encoding pattern', () => {
  it('Normal', () => {
    const str = Hashnum.maxEncode([1, 2, 3])
    const occur = (str.match(/e/g) || []).length
    expect(occur).toEqual(0)
  })

  it('Start with 0', () => {
    const str = Hashnum.maxEncode([0, 1, 2, 3])
    const occur = (str.match(/e/g) || []).length
    expect(str[0]).toEqual('e')
    expect(occur).toEqual(1)
  })

  it('Max number >= table len', () => {
    const str = Hashnum.maxEncode([1, 2, 99])
    const occur = (str.match(/e/g) || []).length
    expect(str[0]).not.toEqual('e')
    expect(occur).toEqual(1)
  })

  it('Start with 0 & Max number >= table len', () => {
    const str = Hashnum.maxEncode([0, 1, 2, 99])
    const occur = (str.match(/e/g) || []).length
    expect(str[0]).toEqual('e')
    expect(occur).toEqual(2)
  })
})
