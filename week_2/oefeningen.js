//oef 1

const daysInWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

daysInWeek.forEach((day) => {
  console.log(day);
});

// oef 3

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

function logMatrix(row, column) {
  console.log(matrix[row][column]);
}

logMatrix(0, 1);

//oef 4

const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}

const colors = ["red", "blue", "green", "yellow"];

colors.forEach((color, index) => {
  console.log(color, index + 1);
});

//oef 5
const woorden = [
  "mal",
  "snurkduif",
  "bromvlieg",
  "snottebel",
  "knotsgek",
  "pindakaas",
  "fluitketel",
  "smurfenmuts",
];

const startWithB = woorden.some((woord) => {
  return woord.startsWith("b");
});

console.log(startWithB);

woorden.unshift("hello");

console.log(woorden);

woorden.forEach((woord) => {
  if (woord.length < 2) {
    console.log("niet alle woorden zijn lang genoeg");
  }
});

woorden.sort((a, b) => b.length + a.length);

console.log(woorden);

console.log(woorden[2]);

//oef 6

const willekeurigeGetallen = [23, 7, 45, 12, 87, 3, 56, 19, 34, 91];

const filterdNumbers = willekeurigeGetallen.filter((value) => {
  return value > 10;
});

console.log(filterdNumbers);

willekeurigeGetallen.pop();
console.log(willekeurigeGetallen);

willekeurigeGetallen.shift();
console.log(willekeurigeGetallen);

willekeurigeGetallen.push(5);
console.log(willekeurigeGetallen);

let bigger = false;

willekeurigeGetallen.forEach((value) => {
  if (value > 20 && !bigger) {
    console.log("niet alle getallen zijn kleiner dan 20");
    bigger = true;
  }
});

const joinedNumbers = willekeurigeGetallen.join(" ");

console.log(joinedNumbers);

const sum = willekeurigeGetallen.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
}, 0);

console.log(sum);

const doubleNumbers = willekeurigeGetallen.map((value) => {
  return value * 2;
});

console.log(doubleNumbers);

const hasNumberBiggerThan30 = willekeurigeGetallen.some((value) => {
  return value > 30;
});

console.log(hasNumberBiggerThan30);

//oef 7
const willekeurigeNamenArray = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eva", "Frank"],
  ["Grace", "Hank", "Ivy"],
  ["Jack", "Kelly", "Liam"],
];

console.log(willekeurigeNamenArray);

const newArray = willekeurigeNamenArray.flat();

console.log(newArray);
newArray.sort();

willekeurigeNamenArray.forEach((subArray) => {
  subArray.shift();
});

console.log(willekeurigeNamenArray);

willekeurigeNamenArray.forEach((subArray) => {
  subArray.pop();
});

console.log(willekeurigeNamenArray);

//oef 8

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = [5, 7, 9];

for (var i = 0; i < array1.length; i++) {
  array1.forEach((arrayOne) => {
    array2.forEach((arrayTwo) => {
      if (i === array1.indexOf(arrayOne) && i === array2.indexOf(arrayTwo)) {
        console.log(arrayOne + arrayTwo);
      }
    });
  });
}

//oef 9
let woordenArray = ["appel", "peer", "kiwi", "banaan"];
let langsteWoord;
woordenArray.forEach((woord) => {
  if (!langsteWoord || woord.length > langsteWoord.length) {
    langsteWoord = woord;
  }
});
console.log(langsteWoord);

//oef 10
function filterEvenGetallen(getallen) {
  return getallen.filter((getal) => getal % 2 === 0);
}

let randomNumbers = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(randomNumbers);
console.log(evenGetallen); // geeft [8, 6, 10]

//oef 11
function sorterenOpEigenschap(objecten, eigenschap) {
  return objecten.sort((a, b) => {
    if (a[eigenschap] < b[eigenschap]) {
      return -1;
    }
    if (a[eigenschap] > b[eigenschap]) {
      return 1;
    }
  });
}
let objectenArray = [
  { naam: "Anna", leeftijd: 30 },
  { naam: "Bob", leeftijd: 25 },
  { naam: "Charlie", leeftijd: 35 },
];
let gesorteerdOpNaam = sorterenOpEigenschap(objectenArray, "naam");
console.log(gesorteerdOpNaam);

// Object oefeningen
//oef 1

const auto = {
  merk: "Toyota",
  model: "Camry",
  jaar: 2022,
  kleur: "blauw",
};

console.log(auto);

auto.kleur = "rood";

console.log(auto);

function logCarBrand(car) {
  return car.merk;
}

console.log(logCarBrand(auto));

auto.brandstof = "benzine";

console.log(auto);

delete auto.jaar;

console.log(auto);

//oef 2

const persoon = {
  naam: "Anna",
  leeftijd: 25,
  adres: {
    straat: "Hoofdstraat",
    nummer: 123,
    stad: "Stadsville",
  },
};

console.log(persoon.adres.nummer);

persoon.telefoon = "047123456789";
console.log(persoon);

const extraInfo = {
  hobby: "slapen",
  favorieteKleur: "rood",
};

Object.assign(persoon, extraInfo);
console.log(persoon);

//oef 3

function zijnObjectenIdentiek(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  return keys1.every(
    (k) => Object.prototype.hasOwnProperty.call(obj2, k) && obj1[k] === obj2[k]
  );
}

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(zijnObjectenIdentiek(objectA, objectB));

//oef 4

const shoppingCart = {
  items: [
    { name: "Product 1", price: 20 },
    { name: "Product 2", price: 30 },
    { name: "Product 3", price: 15 },
  ],

  calculateTotal: function () {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  },
};

const itemNames = shoppingCart.items.map((item) => item.name);
console.log("Namen van items:", itemNames);

const itemPrices = shoppingCart.items.map((item) => item.price);
console.log("Prijzen van items:", itemPrices);

const itemEntries = shoppingCart.items.map((item) => ({
  naam: item.name,
  prijs: item.price,
}));
console.log("Namen en prijzen van items:", itemEntries);

console.log("Totale prijs:", shoppingCart.calculateTotal());
