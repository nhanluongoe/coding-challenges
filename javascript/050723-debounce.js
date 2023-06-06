// Implement a debounce function

function debounce(fn, delay) {
  let timeoutId

  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), delay)
  }
}

// Test

// Normal case
function greet(name) {
  console.info(`Hello ${name}`)
}

const debouncedGreet = debounce(greet, 3000)

debouncedGreet('a')
debouncedGreet('b')
debouncedGreet('c')
debouncedGreet('Harry')


// Edge case: callback can access "this"
const increment = debounce(function (delta) {
  this.val += delta;
})

const obj = {
  val: 0,
  increment,
}

obj.increment(2);
console.log(obj);
setTimeout(() => {
  console.log(obj)
}, 3100)
