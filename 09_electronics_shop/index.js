/* A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1. */

function getMoneySpent(keyboards, drives, b) {
  const sortedKeyboards = keyboards.sort((a, b) => b - a);
  const sortedDrivers = drives.sort((a, b) => b - a);
  const possibleCombinations = [];
  for (let i = 0; i < sortedKeyboards.length; i++) {
    for (let j = 0; j < sortedDrivers.length; j++) {
      if (sortedKeyboards[i] + sortedDrivers[j] <= b) {
        possibleCombinations.push(sortedKeyboards[i] + sortedDrivers[j]);
      }
    }
  }
  return possibleCombinations.length !== 0
    ? possibleCombinations.sort((a, b) => b - a)[0]
    : -1;
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([4], [5], 5));
