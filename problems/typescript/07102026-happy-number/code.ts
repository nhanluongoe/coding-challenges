export default function isHappyNumber(n: number): boolean {
  let slow = n;
  let fast = n;

  while (fast !== 1 && findNextNumber(fast) !== 1) {
    slow = findNextNumber(slow);
    fast = findNextNumber(findNextNumber(fast));
    if (fast === slow) return false;
  }

  return true;
}

function findNextNumber(n: number): number {
  let nextNumber = 0;
  let x = n;
  while (x !== 0) {
    const lastDigit = x % 10;
    x = Math.trunc(x / 10);
    nextNumber += lastDigit ** 2;
  }
  return nextNumber;
}

// not happy number: a -> b -> ... -> c -> d
//                                    |^  |^
//                                    e <- f
//
// happy number: a -> b -> c -> d -> ... -> 1
