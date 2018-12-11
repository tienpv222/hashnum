const { checkStr } = require('./general')
const { maxEncode, maxDecode } = require('./maxEncoder')
const { lenEncode, lenDecode } = require('./lenEncoder')

const CFG = {
  flagBad: 'a',
  dlmtMax: 'e',
  dlmtLen: 'i',
  table: '0123456789bcdfghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
}

function _encode(nums, cfg, encoder) {
  switch (encoder) {
    case 'maxEncoder': return maxEncode(nums, cfg)
    case 'lenEncoder': return lenEncode(nums, cfg)
    default: {
      const max = maxEncode(nums, cfg)
      const len = lenEncode(nums, cfg)
      return max.length < len.length ? max : len
    }
  }
}

function _decode(str, cfg, strOutput) {
  const type = strOutput ? 'string' : 'number'
  checkStr(str) || (str = '')
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
      && (table.size > 3)
      && (table = [...table].join(''))
      && (cfg = {
        dlmtMax: table[0],
        dlmtLen: table[1],
        table: table.slice(2),
      })

    this._cfg = cfg || CFG
  }

  get table() {
    const cfg = this._cfg
    return cfg.dlmtMax + cfg.dlmtLen + cfg.table
  }

  encode(nums) { return _encode(nums, this._cfg) }

  decode(str, strOutput) {
    strOutput == null && (strOutput = this.strOutput)
    return _decode(str, this._cfg, strOutput)
  }

  maxEncode(nums) { return _encode(nums, this._cfg, 'maxEncoder') }
  lenEncode(nums) { return _encode(nums, this._cfg, 'lenEncoder') }

  static encode(nums) { return _encode(nums, CFG) }
  static decode(str, strOutput) { return _decode(str, CFG, strOutput) }
  static maxEncode(nums) { return _encode(nums, CFG, 'maxEncoder') }
  static lenEncode(nums) { return _encode(nums, CFG, 'lenEncoder') }
}

module.exports = Hashnum
