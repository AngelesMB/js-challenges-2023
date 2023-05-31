/* An integer d is a divisor of an integer n if the remainder of n / d = 0.

Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer. */

function findDigits(n) {
  let divisibleDigits = 0;
  const digits = n.toString().split("");
  for (const num of digits) {
    parseInt(num);
    if (n % num === 0) {
      divisibleDigits++;
    }
  }
  return divisibleDigits;
}

console.log(findDigits(124));
console.log(findDigits(1012));
