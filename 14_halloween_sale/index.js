/* You wish to buy video games from the famous online video game store Mist.

Usually, all games are sold at the same price, p dollars. However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price. Specifically, the first game will cost p dollars, and every subsequent game will cost d dollars less than the previous one. This continues until the cost becomes less than or equal to m dollars, after which every game will cost m dollars. How many games can you buy during the Halloween Sale? */

function howManyGames(p, d, m, s) {
  let games = 0;
  if (s < p) {
    games;
  } else if (s === p) {
    games = 1;
  } else {
    s -= p;
    games++;
    while (p - d > m && s >= p - d) {
      s -= p - d;
      p -= d;
      games++;
    }
    if (s >= p) {
      games += Math.floor(s / m);
    }
  }
  return games;
}

console.log(howManyGames(20, 3, 6, 70));
console.log(howManyGames(100, 19, 1, 180));
console.log(howManyGames(16, 2, 1, 9981));
