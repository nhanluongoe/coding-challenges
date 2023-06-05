// Implement a debounce function

function debounce(fn, delay) {
  let timeoutId

  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), delay)
  }
}

// Test

function greet(name) {
  console.info(`Hello ${name}`)
}

const debouncedGreet = debounce(greet, 3000)

debouncedGreet('a')
debouncedGreet('b')
debouncedGreet('c')
debouncedGreet('Harry')
