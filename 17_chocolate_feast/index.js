/* Little Bobby loves chocolate. He frequently goes to his favorite store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate. */

function chocolateFeast(n, c, m) {
  let chocolateBars = Math.floor(n / c);
  let wrappers = chocolateBars;
  while (wrappers >= m) {
    let additionalChocolateBars = Math.floor(wrappers / m);
    chocolateBars += additionalChocolateBars;
    wrappers = wrappers - additionalChocolateBars * m + additionalChocolateBars;
  }
  return chocolateBars;
}

console.log(chocolateFeast(15, 3, 2));
console.log(chocolateFeast(10, 2, 5));
console.log(chocolateFeast(12, 4, 4));
console.log(chocolateFeast(7, 3, 2));
