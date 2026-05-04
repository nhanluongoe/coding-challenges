# Promise Merge

- Language: javascript
- Original path: `javascript/010724-promise-merge.js`
- Solution: `code.js`

## Notes

### Note 1

@param {Promise} p1
@param {Promise} p2
@return {Promise<any>}

### Note 2

// // Test

### Note 3

describe('promiseMerge', () => {

### Note 4

test('returns a promise', () => {

### Note 5

const promise = promiseMerge(Promise.resolve(1), Promise.resolve(2));

### Note 6

expect(promise).toBeInstanceOf(Promise);

### Note 7

});

### Note 8

//   describe('resolved', () => {

### Note 9

describe('numbers', () => {

### Note 10

test('immediately', async () => {

### Note 11

const promise = promiseMerge(Promise.resolve(21), Promise.resolve(22));

### Note 12

await expect(promise).resolves.toBe(43);

### Note 13

});

### Note 14

//       test('delayed', async () => {

### Note 15

const promise = promiseMerge(

### Note 16

new Promise((resolve) => setTimeout(() => resolve(21), 10)),

### Note 17

new Promise((resolve) => setTimeout(() => resolve(22), 5)),

### Note 18

);

### Note 19

await expect(promise).resolves.toBe(43);

### Note 20

});

### Note 21

});

### Note 22

//     describe('strings', () => {

### Note 23

test('immediately', async () => {

### Note 24

const promise = promiseMerge(

### Note 25

Promise.resolve('123'),

### Note 26

Promise.resolve('456'),

### Note 27

);

### Note 28

await expect(promise).resolves.toBe('123456');

### Note 29

});

### Note 30

//       test('delayed', async () => {

### Note 31

const promise = promiseMerge(

### Note 32

new Promise((resolve) => setTimeout(() => resolve('123'), 10)),

### Note 33

new Promise((resolve) => setTimeout(() => resolve('456'), 5)),

### Note 34

);

### Note 35

await expect(promise).resolves.toBe('123456');

### Note 36

});

### Note 37

});

### Note 38

//     describe('arrays', () => {

### Note 39

test('immediately', async () => {

### Note 40

const promise = promiseMerge(

### Note 41

Promise.resolve([1, 2, 3]),

### Note 42

Promise.resolve([4, 5, 6]),

### Note 43

);

### Note 44

await expect(promise).resolves.toEqual([1, 2, 3, 4, 5, 6]);

### Note 45

});

### Note 46

//       test('delayed', async () => {

### Note 47

const promise = promiseMerge(

### Note 48

new Promise((resolve) => setTimeout(() => resolve([1, 2, 3]), 5)),

### Note 49

new Promise((resolve) => setTimeout(() => resolve([4, 5, 6]), 10)),

### Note 50

);

### Note 51

await expect(promise).resolves.toEqual([1, 2, 3, 4, 5, 6]);

### Note 52

});

### Note 53

});

### Note 54

//     describe('objects', () => {

### Note 55

test('immediately', async () => {

### Note 56

const promise = promiseMerge(

### Note 57

Promise.resolve({ foo: 1 }),

### Note 58

Promise.resolve({ bar: 2 }),

### Note 59

);

### Note 60

await expect(promise).resolves.toEqual({ bar: 2, foo: 1 });

### Note 61

});

### Note 62

//       test('delayed', async () => {

### Note 63

const promise = promiseMerge(

### Note 64

new Promise((resolve) => setTimeout(() => resolve({ foo: 1 }), 5)),

### Note 65

new Promise((resolve) => setTimeout(() => resolve({ bar: 2 }), 10)),

### Note 66

);

### Note 67

await expect(promise).resolves.toEqual({ bar: 2, foo: 1 });

### Note 68

});

### Note 69

});

### Note 70

});

### Note 71

//   describe('rejected', () => {

### Note 72

test('promises rejected', async () => {

### Note 73

const promise = promiseMerge(

### Note 74

new Promise((resolve) => setTimeout(() => resolve(1), 5)),

### Note 75

new Promise((_, reject) => setTimeout(() => reject(2), 10)),

### Note 76

);

### Note 77

await expect(promise).rejects.toEqual(2);

### Note 78

});

### Note 79

//     test('supported data types but not mergeable', async () => {

### Note 80

const promise = promiseMerge(

### Note 81

new Promise((resolve) => setTimeout(() => resolve(1), 5)),

### Note 82

new Promise((resolve) => setTimeout(() => resolve([]), 10)),

### Note 83

);

### Note 84

await expect(promise).rejects.toEqual('Unsupported data types');

### Note 85

});

### Note 86

//     test('unsupported data types', async () => {

### Note 87

const promise = promiseMerge(

### Note 88

// @ts-expect-error

### Note 89

new Promise((resolve) => setTimeout(() => resolve(new Set([1]), 5))),

### Note 90

// @ts-expect-error

### Note 91

new Promise((resolve) => setTimeout(() => resolve(new Set([2]), 10))),

### Note 92

);

### Note 93

await expect(promise).rejects.toEqual('Unsupported data types');

### Note 94

});

### Note 95

});

### Note 96

});
