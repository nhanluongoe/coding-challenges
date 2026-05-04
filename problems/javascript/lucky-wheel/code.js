const GIFTS = {
  100: 0,
  200: 0,
  500: 0,
  9999: 3,
}

const PROPABILITY = {
  100: 8400,
  200: 1000,
  500: 576,
  9999: 24,
}

function getRandomGift(giftsPropability) {
  // Calculate the total quantity of all gifts.
  const totalQuantity = Object.values(giftsPropability).reduce(
    (acc, val) => acc + val
  )

  // Generate a random number between 0 and the total quantity.
  const randomNumber = Math.random() * totalQuantity

  // Find the gift based on the random number and the gift probabilities.
  let accumulatedQuantity = 0
  for (const [gift, quantity] of Object.entries(giftsPropability)) {
    accumulatedQuantity += quantity
    if (randomNumber <= accumulatedQuantity) {
      return gift
    }
  }

  return null
}

function letsGo(gifts) {
  const clonedGifts = { ...gifts }
  let gift

  // let loopCount = 0

  do {
    // loopCount++
    gift = getRandomGift(PROPABILITY)
  } while (!clonedGifts[gift])

  clonedGifts[gift]--

  // console.log('loop count ', loopCount)

  return gift
}

console.log(letsGo(GIFTS))

/*
 * Test result
 * */

const GIFTS_NORMAL = {
  100: 999,
  200: 100,
  500: 70,
  9999: 3,
}

function test(loop) {
  const giftCount = {}

  const loopUntilGetGold = []

  // Pick gift <loop> times
  for (let i = 0; i <= loop; i++) {
    const gift = letsGo(GIFTS_NORMAL)
    if (gift === '9999') {
      loopUntilGetGold.push(i)
    }
    giftCount[gift] = giftCount[gift] ? giftCount[gift] + 1 : 1
  }

  console.log('gift count: ', giftCount)

  // Calculate distribution for <loop> times
  const distribution = {}
  const totalGifts = Object.values(giftCount).reduce((acc, val) => acc + val)
  for (const key of Object.keys(giftCount)) {
    distribution[key] = (giftCount[key] / totalGifts) * 100
  }

  console.log('distribution: ', distribution)

  console.log('loops until get gold: ', loopUntilGetGold)
}

test(3000)
