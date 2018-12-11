# [WIP] This project is in working, not ready to use
A library to shorten array of unsigned numbers to a string of characters.


## Usage

```javascript
Hashnum.encode([12, 3, 45, 6, 78, 9]) // '1kaNFRub3'
Hashnum.decode('1kaNFRub3') // [12, 3, 45, 6, 78, 9]
```

`encode` must take an array of unsigned numbers or strings which can be parsed into number.
If invalid input is passed, an empty string will be returned.

```javascript
Hashnum.encode([12, 3, 45, '6', '78', '9']) // '1kaNFRub3'
Hashnum.encode(['a']) // ''
Hashnum.encode([-1]) // ''
Hashnum.encode() // ''
```

`decode` must take a string as first argument. If the string is an invalid encoded string,
an empty array will be returned.

```javascript
Hashnum.decode('*1kaNFRub3') // []
Hashnum.decode() // []
```

`decode` can take a second `boolean` argument to output number as string.

```javascript
Hashnum.decode('1kaNFRub3', true) // ['12', '3', '45', '6', '78', '9']
```

## Custom table

Using custom table of characters by creating a new instance of the library.

```javascript
const hashnum = new Hashnum({
  table: '!@#$%^&*()_+',
  strOutput: true,
})
hashnum.encode([12, 3, 45, 6, 78, 9]) // '%(^)@$%^&*()_+'
hashnum.decode('%(^)@$%^&*()_+') // ['12', '3', '45', '6', '78', '9']
```

`table` - the table of characters. Must contains at least **4** unique characters, or else
the default table will be used.

```javascript
const hashnum = new Hashnum({ table: '!@#' })
hashnum.table // [0-9][a-z][A-Z]
```

`strOutput` - the flag to output decoded number as string. It is overrided
if explicitly being set on calling decoding.

```javascript
const hashnum = new Hashnum({ strOutput: true })
hashnum.decode('1kaNFRub3', false) // [12, 3, 45, 6, 78, 9]
hashnum.decode('1kaNFRub3') // ['12', '3', '45', '6', '78', '9']
```

`table` and `strOutput` can be changed after initialization.

```javascript
const hashnum = new Hashnum()
hashnum.table = '!@#$%^&*()_+'
hashnum.strOutput = true
```
