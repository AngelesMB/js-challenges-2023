/* An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly 'steps' steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. */

function countingValleys(steps, path) {
  let location = 0;
  let valleys = 0;
  for (const ch of path) {
    let alreadyBelowSeaLevel = location < 0;
    if (ch === "D") {
      location--;
    } else {
      location++;
    }
    if (location < 0 && !alreadyBelowSeaLevel) {
      valleys++;
    }
  }
  return valleys;
}

console.log(countingValleys(8, "DDUUUUDD"));
console.log(countingValleys(8, "UDDDUDUU"));
