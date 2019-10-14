import { BASE, TABLE } from './global'
import { toRemains, fromRemains } from './remains'

const toString = (num: bigint) => {
  const indexes = toRemains(num, BASE)
  const chars = indexes.map(e => TABLE[Number(e)])
  const str = chars.join('')
  return str
}

const fromString = (str: string) => {
  const chars = str.split('')
  const indexes = chars.map(e => BigInt(TABLE.indexOf(e)))
  const num = fromRemains(indexes, BASE)
  return num
}

export {
  toString,
  fromString
}
