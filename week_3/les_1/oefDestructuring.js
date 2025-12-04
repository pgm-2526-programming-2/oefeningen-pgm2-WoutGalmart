//oef1
const letters = ["A", "B", "C"];

const [firstLetter, secondLetter, thirdLetter] = letters;

console.log(firstLetter, secondLetter, thirdLetter);

//oef2
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [[a], [, b], [, , c]] = matrix;

console.log(a, b, c);

//oef3
let x = 5;
let y = 10;

// schrijf hier je code om x en y om te wisselen
[x, y] = [y, x];

console.log(x, y); // Output: 10 5

//oef4
const sentence = "This is a sentence.";
// schrijf hier je code om de eerste letter en de rest van de letters toe te kennen aan variabelen
const [firstLetterSentence, ...restOfSentence] = sentence;
console.log(firstLetterSentence, restOfSentence.join("")); // Output: T his is a sentence.

//oef5
function multiply([a, b]) {
  console.log(a * b);
}

// Voorbeeldgebruik:
multiply([3, 5]); // Output: 15
multiply([7, 2]); // Output: 14

//oef6
const numbers = [1, 2, 3, 4, 5];

// schrijf hier je code om de waarden toe te kennen aan variabelen
const [first, second, ...rest] = numbers;

console.log(first, second, rest); // Output: 1 2 [3, 4, 5]

//oef7
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

// schrijf hier je code om de waarden toe te kennen aan variabelen
const {
  name,
  age,
  address: { street, city },
} = person;

console.log(name, age, street, city);

//oef8
const book = { title: "JavaScript Basics", author: "John Doe" };

// schrijf hier je code om de waarden toe te kennen aan variabelen
const { title, author, pages = 1 } = book;

console.log(title, author, pages);

//oef9

function printDetails({ name, age = 25, gender = "Unknown" }) {
  console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}

// Voorbeeldgebruik:
printDetails({ name: "Alice", age: 30, gender: "Female" }); // Output: Name: Alice, Age: 30, Gender: Female
printDetails({ name: "Bob" }); // Output:  Name: Alice, Age: 25, Gender: Unknown

//oef10

function mergeOptions(obj1, obj2) {
  return console.log({ ...obj1, ...obj2 });
}

// Voorbeeldgebruik:
mergeOptions({ option1: "A", option2: "B" }, { option3: "C", option4: "D" }); // Output: { option1: "A", option2: "B", option3: "C", option4: "D" }

//oef11
