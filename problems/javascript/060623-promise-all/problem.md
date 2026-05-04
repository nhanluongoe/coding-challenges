# Promise All

- Language: javascript
- Original path: `javascript/060623-promise-all.js`
- Solution: `code.js`

## Notes

### Note 1

Implement Promise.all()
@param {Array} iterable
@return {Promise<Array>}

### Note 2

Promise.then() version

### Note 3

Async/await version

### Note 4

iterable.forEach(async (item, index) => {

### Note 5

try {

### Note 6

const value = await item;

### Note 7

result[index] = value;

### Note 8

unresolved--;

### Note 9

//     if (unresolved === 0) {

### Note 10

resolve(result);

### Note 11

}

### Note 12

} catch (err) {

### Note 13

reject(err);

### Note 14

}

### Note 15

});

### Note 16

Test
