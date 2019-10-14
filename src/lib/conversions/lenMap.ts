import { encodeMax } from './max'
import { toString } from '../string'

/**
 * This conversion is based on the number being displayed longest
 * Structure:
 *    <LEN_MAP><FLAG><DATA>
 *
 *      + LEN_MAP:
 */

// Find string having longest total length (len * frequency)
const longestLen = (strs: string[], defaultStr) => {
  const lens = {}
  let mode = defaultStr
  let max = 0
  strs.forEach(e => {
    if (!lens[e] && lens[e] != 0) { lens[e] = 0 } else {
      lens[e] += e.length
      if (lens[e] > max)
        max = lens[mode = e]
      else if (lens[e] == max && e == defaultStr)
        mode = e
    }
  })
  return mode
}

const encodeMapLen = (nums: bigint[]) => {
  let strs = nums.map(toString)

  // find string having longest total length (len * frequency)
  const lens = new Map<string, number>()
  let maxStr = ''
  let maxLen = 0
  for (const e of strs) {
    const len = (lens.get(e) || 0) + e.length
    lens.set(e, len)
    if (len > maxLen) {
      maxStr = e
      maxLen = len
    }
  }

  // remove longest string from the array
  strs = strs.filter(e => e !== maxStr)

  const lens = strs.map(e => e.length)
  let prefix = encodeMax(lens, cfg) + cfg.dlmtLen
  skip == cfg.table[0] || (prefix += skip + cfg.dlmtLen)

  return prefix + strs.join('')
}
