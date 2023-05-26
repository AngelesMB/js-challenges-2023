/* Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate. */

function birthday(numbers, days, month) {
  let segments = 0;
  for (let i = 0; i < numbers.length; i++) {
    let aux = numbers.slice(i, i + month);
    if (aux.reduce((a, b) => a + b, 0) === days) {
      segments++;
    }
  }
  return segments;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
