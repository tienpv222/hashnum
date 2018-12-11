class Hashnum {
  numOutput: boolean
  set table(table: string)
  get table(): string

  constructor({ table: string, strOutput: boolean })

  encode(nums: (number | string)[]): sring
  decode(str: string, strOutput?: boolean): (number | string)[]
  maxEncode(nums: (number | string)[]): string
  lenEncode(nums: (number | string)[]): string

  static encode(nums: (number | string)[]): sring
  static decode(str: string, strOutput?: boolean): (number | string)[]
  static maxEncode(nums: (number | string)[]): string
  static lenEncode(nums: (number | string)[]): string
}

export default Hashnum