const CHARS = '-_0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const FLAG_MAX = CHARS[0]
const FLAG_MAP = CHARS[1]
const TABLE = CHARS.slice(2)
const BASE = BigInt(TABLE.length)

export {
  FLAG_MAX,
  FLAG_MAP,
  TABLE,
  BASE
}
