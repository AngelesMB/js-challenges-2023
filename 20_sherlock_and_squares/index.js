/* Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25. */

function squares(a, b) {
  let firstSquareValue = 0;
  let lastSquareValue = 0;
  for (let i = a; i <= b; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      const fistSquareInteger = i;
      firstSquareValue = Math.sqrt(fistSquareInteger);
      break;
    }
  }
  for (let i = b; i >= a; i--) {
    if (Number.isInteger(Math.sqrt(i))) {
      const lastSquareInteger = i;
      lastSquareValue = Math.sqrt(lastSquareInteger);
      break;
    }
  }
  if (firstSquareValue === 0 && lastSquareValue === 0) {
    return 0;
  } else {
    return lastSquareValue - firstSquareValue + 1;
  }
}

console.log(squares(24, 49));
console.log(squares(213, 874));
console.log(squares(300, 346));
