# Function Bind

- Language: javascript
- Original path: `javascript/090623-function-bind.js`
- Solution: `code.js`

## Notes

### Note 1

@param {any} thisArg
@param {...*} boundArgs

### Note 2

Using Reflect to avoid there's a property "call" or "apply" in ...

### Note 3

the originalMethod so we can't use originalMethod.apply(...) or originalMethod.call(...)

### Note 4

console.log(unboundGetX()); // The function gets invoked at the global scope

### Note 5

Expected output: undefined

### Note 6

Expected output: 42
