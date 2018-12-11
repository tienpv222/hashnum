const JSBI = require('jsbi')
const { checkStr, checkNums, checkTokens, castType } = require('./general')
const { convert, revert, encode, decode } = require('./encoder')

function maxEncode(nums, cfg) {
  if (!checkNums(nums)) return ''

  const first0 = !Number(nums[0])
  nums = [...nums]
  first0 && (nums[0] = 1)

  const max = Math.max(...nums)
  const base = max + 1
  const str = encode(revert(nums, base), cfg)

  let prefix = first0 ? cfg.dlmtMax : ''
  prefix += encode(max, cfg)
  prefix += max < cfg.table.length ? '' : cfg.dlmtMax
  return prefix + str
}

function maxDecode(str, cfg, type) {
  if (!checkStr(str)) return []

  const first0 = str[0] == cfg.dlmtMax
  first0 && (str = str.slice(1))

  const tokens = str.split(cfg.dlmtMax)
  if (!checkTokens(tokens, 2)) return []

  const max = tokens[1] ? tokens[0] : tokens[0][0]
  str = tokens[1] || tokens[0].slice(1)

  const base = JSBI.add(decode(max, cfg), JSBI.BigInt(1))
  const nums = convert(decode(str, cfg), base, type)
  first0 && (nums[0] = castType(0, type))
  return nums
}

module.exports = {
  maxEncode,
  maxDecode,
}
