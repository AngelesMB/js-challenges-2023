/* There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string. */

function repeatedString(s, n) {
  if (s.split("").every((char) => char === "a")) return n;
  if (s.length > n) {
    s = s.substring(0, n);
  }
  let charsToAdd = n - s.length;
  let timesToAddWord = Math.floor(charsToAdd / s.length);
  let singleCharsAmountToAdd = charsToAdd % s.length;
  const aCountInString = s.split("").filter((char) => char === "a").length;
  let aCountInSingleChars = 0;
  if (singleCharsAmountToAdd !== 0) {
    const singleCharsToAdd = s.substring(0, singleCharsAmountToAdd);
    aCountInSingleChars = singleCharsToAdd
      .split("")
      .filter((char) => char === "a").length;
  }
  return aCountInString * (timesToAddWord + 1) + aCountInSingleChars;
}

console.log(repeatedString("abcac", 10));
console.log(repeatedString("aab", 882787));
console.log(repeatedString("a", 5000));
console.log(repeatedString("ababa", 3));
