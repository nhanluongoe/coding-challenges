/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  let [takeOutIdx, dineInIdx] = [0, 0]

  for (let idx = 0; idx < servedOrders.length; idx++) {
    const order = servedOrders[idx]

    if (order === takeOutOrders[takeOutIdx]) {
      takeOutIdx++
    } else if (order === dineInOrders[dineInIdx]) {
      dineInIdx++
    } else return false
  }

  if (takeOutIdx < takeOutOrders.length || dineInIdx < dineInOrders.length)
    return false

  return true
}

/**
 * Time complexity: O(n2)
 * Space complexity: O(n)
 */
function isFirstComeFirstServed2(takeOutOrders, dineInOrders, servedOrders) {
  // missing orders
  if (takeOutOrders.length + dineInOrders.length !== servedOrders.length)
    return false

  let result = true

  // register has unserved orders
  const realityServedOrders = takeOutOrders.concat(dineInOrders)
  realityServedOrders.forEach((order) => {
    if (!servedOrders.includes(order)) result = false
  })

  // doesn't satisfy first come - first served
  const takeOutServedOrders = []
  for (const order of takeOutOrders) {
    takeOutServedOrders.push(servedOrders.indexOf(order))
  }
  for (let i = 0; i < takeOutServedOrders.length - 1; i++) {
    if (takeOutServedOrders[i] - takeOutServedOrders[i + 1] >= 0) {
      result = false
      break
    }
  }

  const dineServedOrders = []
  for (const order of dineInOrders) {
    dineServedOrders.push(servedOrders.indexOf(order))
  }
  for (let i = 0; i < dineServedOrders.length - 1; i++) {
    if (dineServedOrders[i] - dineServedOrders[i + 1] >= 0) {
      result = false
      break
    }
  }

  return result
}

// Tests

let desc = 'both registers have same number of orders'
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6])
let actual2 = isFirstComeFirstServed2([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6])
assertEquals(actual, true, desc)
assertEquals(actual2, true, desc)

desc = 'registers have different lengths'
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5])
actual2 = isFirstComeFirstServed2([1, 5], [2, 3, 6], [1, 2, 6, 3, 5])
assertEquals(actual, false, desc)
assertEquals(actual2, false, desc)

desc = 'one register is empty'
actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6])
actual2 = isFirstComeFirstServed2([], [2, 3, 6], [2, 3, 6])
assertEquals(actual, true, desc)
assertEquals(actual2, true, desc)

desc = 'served orders is missing orders'
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5])
actual2 = isFirstComeFirstServed2([1, 5], [2, 3, 6], [1, 6, 3, 5])
assertEquals(actual, false, desc)
assertEquals(actual2, false, desc)

desc = 'served orders has extra orders'
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8])
actual2 = isFirstComeFirstServed2([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8])
assertEquals(actual, false, desc)
assertEquals(actual2, false, desc)

desc = 'one register has extra orders'
actual = isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8])
actual2 = isFirstComeFirstServed2([1, 9], [7, 8], [1, 7, 8])
assertEquals(actual, false, desc)
assertEquals(actual2, false, desc)

desc = 'one register has unserved orders'
actual = isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9])
actual2 = isFirstComeFirstServed2([55, 9], [7, 8], [1, 7, 8, 9])
assertEquals(actual, false, desc)
assertEquals(actual2, false, desc)

desc = 'order numbers are not sequential'
actual = isFirstComeFirstServed(
  [27, 12, 18],
  [55, 31, 8],
  [55, 31, 8, 27, 12, 18]
)
actual2 = isFirstComeFirstServed2(
  [27, 12, 18],
  [55, 31, 8],
  [55, 31, 8, 27, 12, 18]
)
assertEquals(actual, true, desc)
assertEquals(actual2, true, desc)

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`)
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}
