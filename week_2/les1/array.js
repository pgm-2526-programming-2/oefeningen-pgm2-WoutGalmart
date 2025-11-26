const games = ["Mario", "zelda", "N+ game"];
const favoriteGames = [
  {
    name: "Mario",
    releaseYear: 1980,
  },
  {
    name: "zelda",
    releaseYear: 1984,
  },
];

const altGames = new Array();

Array.isArray(games); // true

const secondGame = games[1];
const altSecondGame = games.at(1);

const lastGame = games.at(-1);

const values = [
  "wout",
  function () {
    console.log("hello world");
  },
];

const amountOfFavoriteGames = favoriteGames.length;

games.length = 3;
const topThree = games;

games.length = 4;

const strignArray = "[1, 2, 3, 4]";
const numbers = JSON.parse(strignArray);
console.log(typeof strignArray);
console.log(typeof numbers);

numbers.push(5);

const numbersString = JSON.stringify(numbers);
console.log(numbers, numbersString);

const studens = ["Nick", "Mert", "Yens"];
const people = ["Nick", "Mert", "Yens"];

const student = "Wout";
const friend = "Wout";

console.log(studens === people); // false
console.log(student === friend); // true

function areArrayEqual(arg1, arg2) {
  if (JSON.stringify(arg1) === JSON.stringify(arg2)) {
    return true;
  }
  return false;
}

console.log(areArrayEqual(studens, people));
console.log(areArrayEqual(student, friend));

const matrix = [
  ["0", "0", "0", "0"],
  ["0", "X", "0", "0"],
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
];

matrix[1][1];

const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}

colors.forEach((color) => {
  console.log(color);
});

colors.push("yellow"); // end
colors.unshift("purple"); // begin

colors.pop(); // end
colors.shift(); // begin

console.log("Numbers", numbers);
const doubleNumbers = numbers.map((value, index) => {
  if (value === 2) {
    return value;
  }
  return value * 2;
});

console.log(doubleNumbers);

console.log("double numbers as string", doubleNumbers.join("|"));

const numbersWithoutEight = doubleNumbers.filter((value) => {
  return value !== 8;
});

console.log(numbersWithoutEight);

numbers.some((number) => {
  return number === 8;
});

numbers.every((number) => {
  return number === 8;
});

const sales = [4, 10, 6];

const totalSales = sales.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
});

console.log(totalSales);

const products = [
  { name: "shirt", price: 20 },
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 15 },
];

const totalPoructSales = products.reduce((prevValue, currentValue) => {
  return prevValue + currentValue.price;
}, 0);

console.log(totalPoructSales);
