export const GIFTS = {
  100: 0,
  200: 0,
  500: 0,
  9999: 3,
};

export const PROPABILITY = {
  100: 8400,
  200: 1000,
  500: 576,
  9999: 24,
};

export function getRandomGift(giftsPropability) {
  // Calculate the total quantity of all gifts.
  const totalQuantity = Object.values(giftsPropability).reduce(
    (acc, val) => acc + val,
  );

  // Generate a random number between 0 and the total quantity.
  const randomNumber = Math.random() * totalQuantity;

  // Find the gift based on the random number and the gift probabilities.
  let accumulatedQuantity = 0;
  for (const [gift, quantity] of Object.entries(giftsPropability)) {
    accumulatedQuantity += quantity;
    if (randomNumber <= accumulatedQuantity) {
      return gift;
    }
  }

  return null;
}

export default function letsGo(gifts) {
  const clonedGifts = { ...gifts };
  let gift;

  // let loopCount = 0

  do {
    // loopCount++
    gift = getRandomGift(PROPABILITY);
  } while (!clonedGifts[gift]);

  clonedGifts[gift]--;

  // console.log('loop count ', loopCount)

  return gift;
}
