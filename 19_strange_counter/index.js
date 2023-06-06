/* There is a strange counter. At the first second, it displays the number 3. Each second, the number displayed by decrements by 1 until it reaches 1. In next second, the timer resets to 2 * the initial number for the prior cycle and continues counting down. Find and print the value displayed by the counter at time t. */

function strangeCounter(t) {
  let startTime = 1;
  let startValue = 3;
  for (let cycle = 1; startTime + startValue <= t; cycle += startValue) {
    startTime += startValue;
    startValue *= 2;
  }
  const unitsToDecrement = t - startTime;
  return startValue - unitsToDecrement;
}

console.log(strangeCounter(2));
console.log(strangeCounter(14));
console.log(strangeCounter(21));
console.log(strangeCounter(99999997668));
