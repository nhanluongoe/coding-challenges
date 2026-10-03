/** Time complexity: O(n), space complexity: O(1). */
export default function isFirstComeFirstServed(
  takeOutOrders,
  dineInOrders,
  servedOrders,
) {
  let takeOutIndex = 0
  let dineInIndex = 0

  for (const order of servedOrders) {
    if (order === takeOutOrders[takeOutIndex]) takeOutIndex++
    else if (order === dineInOrders[dineInIndex]) dineInIndex++
    else return false
  }

  return (
    takeOutIndex === takeOutOrders.length &&
    dineInIndex === dineInOrders.length
  )
}

export function isFirstComeFirstServed2(
  takeOutOrders,
  dineInOrders,
  servedOrders,
) {
  return isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders)
}
