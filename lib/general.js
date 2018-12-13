function checkNum(num) {
  switch (typeof num) {
    case 'string': return /^\d+$/.test(num)
    case 'number': return num >= 0
    default: return false
  }
}

function checkNums(nums) {
  if (!Array.isArray(nums))
    return false
  for (let e of nums)
    if (!checkNum(e)) return false
  return nums.length
}

function checkStr(str, table) {
  if (typeof str != 'string' || str == '')
    return false

  str = new Set(str.split(''))
  return [...str].every(e => table.indexOf(e) != -1)
}

function checkTokens(tokens, max, min = 1) {
  if (tokens.length < min || tokens.length > max)
    return false
  for (let e of tokens)
    if (e == '') return false
  // todo: check for characters in table
  return true
}

function castType(data, type) {
  if (type == 'number') return Number(data)
  else if (type == 'string') return String(data)
  else return data
}

module.exports = {
  checkNum,
  checkNums,
  checkStr,
  checkTokens,
  castType,
}
