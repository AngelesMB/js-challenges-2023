/* Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k. */

function divisibleSumPairs(n, k, ar) {
  let pairs = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        pairs.push([ar[i], ar[j]]);
      }
    }
  }
  return pairs.length;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
