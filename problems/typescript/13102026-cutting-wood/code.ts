export default function findHighestWoodcutterHeight(
  heights: number[],
  k: number,
): number {
  let left = 0;
  let right = Math.max(...heights);

  while (left < right) {
    const mid = Math.floor((left + right) / 2) + 1;
    if (cutEnoughWood(heights, k, mid)) left = mid;
    else right = mid - 1;
  }
  return right;
}

function cutEnoughWood(heights: number[], k: number, mid: number) {
  let cutWood = 0;
  heights.forEach((h) => {
    if (h - mid > 0) cutWood += h - mid;
  });
  return cutWood >= k;
}
