/**
 * Implement Promise.all()
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const result = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(result);
    }

    // Promise.then() version
    iterable.forEach((item, index) => {
      Promise.resolve(item).then(
        (value) => {
          result[index] = value;
          unresolved--;

          if (unresolved === 0) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        },
      );
    });

    // Async/await version
    // iterable.forEach(async (item, index) => {
    //   try {
    //     const value = await item;
    //     result[index] = value;
    //     unresolved--;
    //
    //     if (unresolved === 0) {
    //       resolve(result);
    //     }
    //   } catch (err) {
    //     reject(err);
    //   }
    // });
  });
}
