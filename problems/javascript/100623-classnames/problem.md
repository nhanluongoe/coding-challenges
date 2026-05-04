# Classnames

- Language: javascript
- Original path: `javascript/100623-classnames.js`
- Solution: `code.js`

## Notes

### Note 1

@param {...(string|Object|Array<string|Object>)} args
@return {string}

### Note 2

classNames({ 'foo-bar': false }); // ''

### Note 3

classNames({ foo: true }, { bar: true }); // 'foo bar'

### Note 4

classNames({ foo: true, bar: true }); // 'foo bar'

### Note 5

classNames({ foo: true, bar: false, qux: true }); // 'foo qux'

### Note 6

classNames(

### Note 7

'foo',

### Note 8

{

### Note 9

bar: true,

### Note 10

duck: false,

### Note 11

},

### Note 12

'baz',

### Note 13

{ quux: true },

### Note 14

); // 'foo bar baz quux'

### Note 15

classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // 'bar 1'
