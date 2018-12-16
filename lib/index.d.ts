declare class Hashnum {
  strOutput: boolean
  table: string

  constructor({ table: string, strOutput: boolean })

  encode(nums: (number | string)[]): string
  decode(str: string, strOutput?: boolean): (number | string)[]
  maxEncode(nums: (number | string)[]): string
  lenEncode(nums: (number | string)[]): string

  static encode(nums: (number | string)[]): string
  static decode(str: string, strOutput?: boolean): (number | string)[]
  static maxEncode(nums: (number | string)[]): string
  static lenEncode(nums: (number | string)[]): string
}

export default Hashnum