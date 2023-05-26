/* Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids. */

function migratoryBirds(arr) {
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    if (!frequency[arr[i]]) {
      frequency[arr[i]] = 1;
    } else {
      frequency[arr[i]]++;
    }
  }
  return Object.keys(frequency).reduce((a, b) =>
    frequency[a] >= frequency[b] ? a : b
  );
}

console.log(migratoryBirds([1, 1, 2, 2, 3]));
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
