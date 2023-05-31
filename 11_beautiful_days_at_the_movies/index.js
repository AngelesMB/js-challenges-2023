/* Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.

She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days, [i...j] and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where i - reverse(i) is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range. */

function beautifulDays(i, j, k) {
  const daysRange = [];
  const reverseDaysRange = [];
  const days = j - i;
  let beautifulDays = 0;
  for (let m = 0; m <= days; m++) {
    daysRange.push(i + m);
  }
  for (let i = 0; i < daysRange.length; i++) {
    reverseDaysRange.push(
      parseInt(daysRange[i].toString().split("").reverse().join(""))
    );
  }
  for (let n = 0; n < daysRange.length; n++) {
    if ((daysRange[n] - reverseDaysRange[n]) % k === 0) {
      beautifulDays++;
    }
  }
  return beautifulDays;
}

console.log(beautifulDays(20, 23, 6));
