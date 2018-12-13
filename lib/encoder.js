const JSBI = require('jsbi')
const { castType } = require('./general')

function convert(num, base, type) {
  num = JSBI.BigInt(num)
  base = JSBI.BigInt(base)

  let nums = []
  do {
    nums.push((JSBI.remainder(num, base)))
    num = JSBI.divide(num, base)
  } while (JSBI.greaterThan(num, JSBI.BigInt(0)))

  return nums.reverse().map(e => castType(e, type))
}

function revert(nums, base, type) {
  base = JSBI.BigInt(base)

  let num = nums.reduce((a, e, i) => {
    e = JSBI.BigInt(e)
    let exponent = JSBI.BigInt(nums.length - i - 1)
    let pow = JSBI.exponentiate(base, exponent)

    return JSBI.add(a, JSBI.multiply(e, pow))
  }, JSBI.BigInt(0))

  return castType(num, type)
}

function encode(num, cfg) {
  let nums = convert(num, cfg.table.length)
  let chars = nums.map(e => cfg.table[e])
  return chars.join('')
}

function decode(str, cfg, type) {
  let chars = str.split('')
  let nums = chars.map(e => cfg.table.indexOf(e))
  return revert(nums, cfg.table.length, type)
}

module.exports = {
  convert,
  revert,
  encode,
  decode,
}
