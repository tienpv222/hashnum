const JSBI = require('jsbi')
const { checkTokens, castType } = require('./general')
const { convert, revert, encode, decode } = require('./encoder')

function maxEncode(nums, cfg) {
  let first0 = !Number(nums[0])
  nums = [...nums]
  first0 && (nums[0] = 1)

  let max = Math.max(...nums)
  let base = max + 1
  let str = encode(revert(nums, base), cfg)

  let prefix = first0 ? cfg.dlmtMax : ''
  prefix += encode(max, cfg)
  prefix += max < cfg.table.length ? '' : cfg.dlmtMax
  return prefix + str
}

function maxDecode(str, cfg, type) {
  let first0 = str[0] == cfg.dlmtMax
  first0 && (str = str.slice(1))

  let tokens = str.split(cfg.dlmtMax)
  if (!checkTokens(tokens, 2)) return []

  let max = tokens[1] ? tokens[0] : tokens[0][0]
  str = tokens[1] || tokens[0].slice(1)

  let base = JSBI.add(decode(max, cfg), JSBI.BigInt(1))
  let nums = convert(decode(str, cfg), base, type)
  first0 && (nums[0] = castType(0, type))
  return nums
}

module.exports = {
  maxEncode,
  maxDecode,
}
