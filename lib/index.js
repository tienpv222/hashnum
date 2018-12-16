/**
 * @preserve
 * This library is under MIT license: github.com/pynnl/hashnum/blob/master/LICENSE
 * This library uses following third party libraries:
 * + JSBI: github.com/GoogleChromeLabs/jsbi/blob/master/LICENSE
 */

const { checkStr, checkNums } = require('./general')
const { maxEncode, maxDecode } = require('./maxEncoder')
const { lenEncode, lenDecode } = require('./lenEncoder')

const CFG = {
  flagBad: 'a',
  dlmtMax: 'e',
  dlmtLen: 'i',
  table: '0123456789bcdfghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  tableFull: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
}

function encode(nums, cfg, encoder) {
  if (!checkNums(nums)) return ''

  switch (encoder) {
    case 'maxEncoder': return maxEncode(nums, cfg)
    case 'lenEncoder': return lenEncode(nums, cfg)
    default: {
      let max = maxEncode(nums, cfg)
      let len = lenEncode(nums, cfg)
      return max.length < len.length ? max : len
    }
  }
}

function decode(str, cfg, strOutput) {
  if (!checkStr(str, cfg.tableFull)) return []

  str = str.replace(new RegExp(cfg.flagBad, 'g'), '')
  let type = strOutput ? 'string' : 'number'

  return str.indexOf(cfg.dlmtLen) == -1
    ? maxDecode(str, cfg, type)
    : lenDecode(str, cfg, type)
}

class Hashnum {
  constructor(cfg) {
    this.table = cfg ? cfg.table : null
    this.strOutput = cfg ? cfg.strOutput : null
  }

  set table(table) {
    let cfg

    typeof table == 'string'
      && (table = new Set(table.split('')))
      && (table.size >= 5)
      && (table = [...table].join(''))
      && (cfg = {
        flagBad: table[0],
        dlmtMax: table[1],
        dlmtLen: table[2],
        table: table.slice(3),
        tableFull: table,
      })

    this._cfg = cfg || CFG
  }

  get table() { return this._cfg.tableFull }

  encode(nums) { return encode(nums, this._cfg) }

  decode(str, strOutput) {
    strOutput == null && (strOutput = this.strOutput)
    return decode(str, this._cfg, strOutput)
  }

  maxEncode(nums) { return encode(nums, this._cfg, 'maxEncoder') }
  lenEncode(nums) { return encode(nums, this._cfg, 'lenEncoder') }

  static get table() { return CFG.tableFull }

  static encode(nums) { return encode(nums, CFG) }
  static decode(str, strOutput) { return decode(str, CFG, strOutput) }
  static maxEncode(nums) { return encode(nums, CFG, 'maxEncoder') }
  static lenEncode(nums) { return encode(nums, CFG, 'lenEncoder') }
}

module.exports = Hashnum
