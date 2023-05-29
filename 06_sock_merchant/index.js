/* There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. */

function sockMerchant(n, ar) {
  const colorSockRelationship = {};
  let matchingPairs = 0;
  for (let i = 0; i < ar.length; i++) {
    if (colorSockRelationship[ar[i]]) {
      colorSockRelationship[ar[i]]++;
    } else {
      colorSockRelationship[ar[i]] = 1;
    }
  }
  for (const color in colorSockRelationship) {
    let socks = colorSockRelationship[color];
    socks -= socks % 2;
    if (socks !== 0 && socks % 2 === 0) {
      matchingPairs += socks / 2;
    }
  }
  return matchingPairs;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
