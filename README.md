# hashnum

A small library to shorten array of positive numbers or zero into a string of characters.

## Install

```
npm i -S hashnum
```

```javascript
import Hashnum from 'hashnum'
```

## Usage

```javascript
Hashnum.encode([12, 3, 45, 6, 78, 9]) // '1meSQKbq1'
Hashnum.decode('1meSQKbq1')           // [12, 3, 45, 6, 78, 9]
```

`encode` must take an array of unsigned numbers or strings which can be parsed into number.
If invalid input is passed, an empty string will be returned.

```javascript
Hashnum.encode([12, 3, 45, '6', '78', '9']) // '1meSQKbq1'
Hashnum.encode(['a']) // ''
Hashnum.encode([-1])  // ''
Hashnum.encode()      // ''
```

`decode` must take a string as first argument. If the string is an invalid encoded string,
an empty array will be returned.

```javascript
Hashnum.decode('*1meSQKbq1') // []
Hashnum.decode()             // []
```

`decode` can take a second `boolean` argument to output number as string.

```javascript
Hashnum.decode('1meSQKbq1', true) // ['12', '3', '45', '6', '78', '9']
```

## Custom table

Using custom table of characters by creating a new instance of the library.

```javascript
const hashnum = new Hashnum({
  table: '!@#$%^&*()',
  strOutput: true,
})
// OR
const hashnum = new Hashnum()
hashnum.table = '!@#$%^&*()'
hashnum.strOutput = true
//
hashnum.encode([12, 3, 45, 6, 78, 9]) // '&^%@&)%%)((()(^&(*'
hashnum.decode('&^%@&)%%)((()(^&(*')  // ['12', '3', '45', '6', '78', '9']
```

`table` - the table of characters. Must contains at least **6** unique characters, or else
the default table will be used.

```javascript
const hashnum = new Hashnum({ table: '!@#$%' })
hashnum.table == Hashnum.table // true - [0-9][a-z][A-Z]
```

`strOutput` - the flag to output decoded number as string. It is overrided
if explicitly being set on calling decoding.

```javascript
const hashnum = new Hashnum({ strOutput: true })
hashnum.decode('1meSQKbq1', false) // [12, 3, 45, 6, 78, 9]
hashnum.decode('1meSQKbq1')        // ['12', '3', '45', '6', '78', '9']
```
