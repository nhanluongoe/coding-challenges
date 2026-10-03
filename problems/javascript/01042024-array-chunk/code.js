export default function chunkArray(array, size = 1) {
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError("size must be a positive integer");
  }

  let count = 0;
  const chunks = [];
  while (count < array.length) {
    const chunk = array.slice(count, count + size);
    chunks.push(chunk);
    count += size;
  }
  return chunks;
}
