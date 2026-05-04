export default function chunkArray(array, size = 1) {
  let count = 0;
  const chunks = [];
  while (count < array.length) {
    const chunk = array.slice(count, count + size);
    chunks.push(chunk);
    count += size;
  }
  return chunks;
}

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11]]
chunkArray([], 3); // []
chunkArray([1], 3); // [[1]]
