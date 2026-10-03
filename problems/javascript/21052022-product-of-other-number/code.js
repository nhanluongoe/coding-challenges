/** Requirement: cannot use division. */
export default function getProductsOfAllIntsExceptAtIndex(values) {
  if (values.length < 2) throw new Error("Require at least 2 elements!")

  const products = []
  let productSoFar = 1
  for (let index = 0; index < values.length; index++) {
    products[index] = productSoFar
    productSoFar *= values[index]
  }

  productSoFar = 1
  for (let index = values.length - 1; index >= 0; index--) {
    products[index] *= productSoFar
    productSoFar *= values[index]
  }

  return products
}
