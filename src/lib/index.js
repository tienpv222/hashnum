const { checkStr } = require('./general')
const { maxEncode, maxDecode } = require('./maxEncoder')
const { lenEncode, lenDecode } = require('./lenEncoder')

const CFG = {
  dlmtMax: '+',
  dlmtLen: '-',
  table: '0123456789bcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
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

  set table(cfg) {
    let valid
    typeof cfg == 'string'
      && (cfg = new Set(cfg.split('')))
      && (cfg.size > 3)
      && (cfg = [...cfg].join(''))
      && (valid = true)
      && (cfg = {
        dlmtMax: cfg[0],
        dlmtLen: cfg[1],
        table: cfg.slice(2),
      })

    this._cfg = valid ? cfg : CFG
  }

  get table() { return this._cfg.table }

  encode(nums) { return _encode(nums, this._cfg) }
  decode(str, strOutput) { return _decode(str, this._cfg, strOutput || this.strOutput) }
  maxEncode(nums) { return _encode(nums, this._cfg, 'maxEncoder') }
  lenEncode(nums) { return _encode(nums, this._cfg, 'lenEncoder') }

  static encode(nums) { return _encode(nums, CFG) }
  static decode(str, type) { return _decode(str, CFG, type) }
  static maxEncode(nums) { return _encode(nums, CFG, 'maxEncoder') }
  static lenEncode(nums) { return _encode(nums, CFG, 'lenEncoder') }
}

module.exports = Hashnum
