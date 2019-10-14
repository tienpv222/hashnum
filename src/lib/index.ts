import { encodeMax, decodeMax } from './conversions/max'
import { FLAG_MAP } from './global'

const encode = (nums: readonly number[]) => {
  try {
    const _nums = nums.map(BigInt)
    return encodeMax(_nums)
  } catch {
    return ''
  }
}

const decode = (str: string) => {
  try {
    return str.includes(FLAG_MAP)
      ? ''
      : decodeMax(str)
  } catch {
    return []
  }
}

export {
  encode,
  decode
}
