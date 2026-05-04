# Intersection By

- Language: javascript
- Original path: `javascript/140624-intersection-by.js`
- Solution: `code.js`

## Notes

### Note 1

@param {Function} iteratee - The iteratee function to apply to each value.
@param {Array[]} arrays - The arrays to perform the intersection on.
@returns {Array} - A new array containing the unique values present in all given arrays.

### Note 2

First attempt

### Note 3

function intersectionBy(iteratee, ...arrays) {

### Note 4

const intersection = [];

### Note 5

//   const [firstArray, ...restArrays] = arrays;

### Note 6

//   for (const item of firstArray) {

### Note 7

let intersected = true;

### Note 8

for (const arr of restArrays) {

### Note 9

if (!arr.map(iteratee).includes(iteratee(item))) {

### Note 10

intersected = false;

### Note 11

}

### Note 12

}

### Note 13

if (intersected && !intersection.map(iteratee).includes(iteratee(item))) {

### Note 14

intersection.push(item);

### Note 15

}

### Note 16

}

### Note 17

//   return intersection;

### Note 18

}

### Note 19

Refactor

### Note 20

Map with iteratee

### Note 21

Remove duplicated values

### Note 22

Revert back to original values
