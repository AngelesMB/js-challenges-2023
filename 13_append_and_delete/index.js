/* You have two strings of lowercase English letters. You can perform two types of operations on the first string:

1. Append a lowercase English letter to the end of the string.
2. Delete the last character of the string. Performing this operation on an empty string results in an empty string.
Given an integer, k, and two strings, s and t, determine whether or not you can convert s to t by performing exactly k of the above operations on s. If it's possible, print Yes. Otherwise, print No. */

function appendAndDelete(s, t, k) {
  let stringToEvaluate = s;
  let moves = k;
  let firstIndexToDelete;
  if (moves >= stringToEvaluate.length + t.length) {
    return "Yes";
  }
  if (stringToEvaluate.length > t.length) {
    const charsToTrim = stringToEvaluate.length - t.length;
    stringToEvaluate = stringToEvaluate.slice(0, -charsToTrim);
    moves -= charsToTrim;
  }
  while (stringToEvaluate !== t && moves > 0) {
    for (let i = 0; i < t.length; i++) {
      if (stringToEvaluate[i] !== t[i]) {
        if (stringToEvaluate[i]) {
          firstIndexToDelete = i;
          const movesToSubtract = stringToEvaluate.length - i;
          stringToEvaluate = stringToEvaluate.slice(
            0,
            -(stringToEvaluate.length - i)
          );
          moves -= movesToSubtract;
        }
        const charsToAdd = t.length - stringToEvaluate.length;
        stringToEvaluate = stringToEvaluate.concat(t.substring(i));
        moves -= charsToAdd;
      }
    }
  }
  const conditionForLeftoverMoves =
    moves === 0 || (moves > 0 && (moves % 2 === 0 || firstIndexToDelete === 0));
  return stringToEvaluate === t && conditionForLeftoverMoves ? "Yes" : "No";
}

console.log(appendAndDelete("abc", "def", 6));
console.log(appendAndDelete("aba", "aba", 7));
console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
console.log(appendAndDelete("ashley", "ash", 2));
console.log(appendAndDelete("abcdef", "fedcba", 15));
