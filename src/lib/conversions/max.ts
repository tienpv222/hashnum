import { fromRemains, toRemains } from '../remains'
import { toString, fromString } from '../string'
import { FLAG_MAX } from '../global'

/**
 * This conversion is based on the max number in the array
 * Structure:
 *    [FLAG_LAST_0]<MAX_NUMBER>[FLAG_MAX_NUMBER]<DATA>
 *
 *      + FLAG_LAST_0: flag when last number in the array is zero
 *      + MAX_NUMBER: max number in the array
 *      + FLAG_MAX_NUMBER: flag when max number takes 1+ char to display
 *      + DATA: data for the array (by conversing base twice)
 */

const encodeMax = (nums: readonly bigint[]) => {
  // if last number is 0, change to 1
  const last0 = !nums[nums.length - 1]
  if (last0) {
    nums = nums.slice()
    // @ts-ignore
    nums[nums.length - 1] = 1n
  }

  let maxNum = nums[0]
  for (const e of nums) {
    if (e > maxNum)
      maxNum = e
  }

  const base = maxNum + 1n
  const flagLast0 = last0 ? FLAG_MAX : ''
  const maxNumStr = toString(maxNum)
  const flagMaxNum = maxNumStr.length > 1 ? FLAG_MAX : ''
  const data = toString(fromRemains(nums, base))
  const str = flagLast0 + maxNumStr + flagMaxNum + data

  return str
}

const decodeMax = (str: string) => {
  // flag for when last number is 0
  const last0 = str[0] === FLAG_MAX
  if (last0)
    str = str.slice(1)

  const tokens = str.split(FLAG_MAX)
  const maxNumStr = tokens[1] ? tokens[0] : str[0]
  const data = tokens[1] || str.slice(1)
  const base = fromString(maxNumStr) + 1n
  const nums = toRemains(fromString(data), base)

  // if has flag for last number is 0, change back to 0
  if (last0)
    nums[nums.length - 1] = 0n

  return nums
}

export {
  encodeMax,
  decodeMax
}
