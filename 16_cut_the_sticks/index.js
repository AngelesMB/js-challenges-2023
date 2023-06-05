/* You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

Given the lengths of  sticks, print the number of sticks that are left before each iteration until there are none left. */

function cutTheSticks(arr) {
  let shortestStick = arr.reduce((a, b) => (a < b ? a : b));
  let remainingSticks = [...arr];
  let sticksBeforeEachIteration = [remainingSticks.length];
  while (remainingSticks.length > 0) {
    for (let i = 0; i < remainingSticks.length; i++) {
      if (remainingSticks[i] >= shortestStick) {
        remainingSticks[i] -= shortestStick;
      }
    }
    remainingSticks = remainingSticks.filter((num) => num > 0);
    if (remainingSticks.length > 0) {
      shortestStick = remainingSticks.reduce((a, b) => (a < b ? a : b));
      sticksBeforeEachIteration.push(remainingSticks.length);
    }
  }
  return sticksBeforeEachIteration;
}

console.log(cutTheSticks([1, 2, 3]));
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
