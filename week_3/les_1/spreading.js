const numbers = [1, 2, 3];

console.log(numbers, ...numbers);

const students = ["Mert", "Jens"];

const friends = students;

const people = [...students];

const drinks = ["Pintje", "Gin", "Mocktail"];
const snacks = ["Frikandel", "Chips"];

const menu = [...drinks, "cola", ...snacks];

console.log(menu);

const car = {
  brand: "Citroen",
  model: "C8",
  year: 2011,
};

const upgrade = {
  spoiler: true,
  extra: ["gps", "uitlaat"],
};

//car.upgrade = { upgrade };
//console.log(car);

const upgradedCar = { ...car, ...upgrade };

const a = "hello";

const obj = {
  a,
};
