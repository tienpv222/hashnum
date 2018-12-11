const Hashnum = require('../lib')

describe('Encode returns empty string on invalid input:', () => {
  it('Null', () => {
    expect(Hashnum.lenEncode(null)).toEqual('')
    expect(Hashnum.lenEncode()).toEqual('')
  })

  it('Number', () => {
    [0, 1, 99].forEach(e => expect(Hashnum.lenEncode(e)).toEqual(''))
  })

  it('String', () => {
    ['', 'a', '99'].forEach(e => expect(Hashnum.lenEncode(e)).toEqual(''))
  })

  it('Object', () => {
    expect(Hashnum.lenEncode({})).toEqual('')
  })

  it('Negative number in array', () => {
    expect(Hashnum.lenEncode([-1])).toEqual('')
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
    const str = Hashnum.lenEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data)
  })

  it('Of valid string', () => {
    const data = ['1', '23', '456', '7890']
    const str = Hashnum.lenEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data.map(e => Number(e)))
  })

  it('Of mix string and number', () => {
    const data = ['0', 0, '0', 1]
    const str = Hashnum.lenEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data.map(e => Number(e)))
  })

  it('Start with 0', () => {
    const data = [0, 0, 0, 1]
    const str = Hashnum.lenEncode(data)
    const nums = Hashnum.decode(str)
    expect(nums).toEqual(data)
  })
})

describe('Encoding pattern', () => {
  it('Normal', () => {
    const str = Hashnum.lenEncode([1, 2, 3])
    const occur = (str.match(/i/g) || []).length
    expect(occur).toEqual(1)
  })

  it('>=2 numbers < table len', () => {
    const str = Hashnum.lenEncode([1, 1, 2])
    const occur = (str.match(/i/g) || []).length
    expect(occur).toEqual(2)
  })

  it('same 0s vs same numbers < table len', () => {
    const str = Hashnum.lenEncode([0, 0, 1, 1])
    const occur = (str.match(/i/g) || []).length
    expect(occur).toEqual(1)
  })

  it('1 number > table len', () => {
    const str = Hashnum.lenEncode([1, 2, 99])
    const occur = (str.match(/i/g) || []).length
    expect(occur).toEqual(1)
  })

  it('2 numbers > table len', () => {
    const str = Hashnum.lenEncode([1, 99, 99])
    const occur = (str.match(/i/g) || []).length
    expect(occur).toEqual(2)
  })

  it('same 0s vs same very big numbers', () => {
    const str = Hashnum.lenEncode([0, 0, 999, 999])
    const occur = (str.match(/i/g) || []).length
    expect(occur).toEqual(2)
  })
})
