const toRemains = (num: bigint, base: bigint) => {
  const remains = [] as bigint[]
  while (num) {
    remains.push(num % base)
    num = num / base
  }
  return remains
}

const fromRemains = (remains: readonly bigint[], base: bigint) => {
  let num = 0n
  for (let i = 0, j = 0n; i < remains.length; ++i, ++j)
    num += remains[i] * base ** j
  return num
}

export {
  toRemains,
  fromRemains
}
