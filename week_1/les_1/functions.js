function sum(a, b) {
  return a + b;
}

const arrowFunction = () => {};

function selectRandomStudent(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const age = 25;

const students = ["John", "Jane", "Doe"];

// console.log(sum(age, 3));
// console.log(selectRandomStudent(students));

function showMessage() {
  console.log("Answer checker message");
}

function checkAnswer(answer, solution, callback) {
  if (answer === solution) {
    callback();
    return true;
  }
  callback();
  return false;
}

// console.log(checkAnswer("ja", "ja", showMessage));

// console.log(checkAnswer("ja", "nee", showMessage));

// oef multiply, division

const multiply = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  return a / b;
};

// oef maak een functie showCalculation die 3 parameters heeft 2 getallen en een van onze functies

function showCalculation(number1, number2, calculation) {
  return console.log(calculation(number1, number2));
}

showCalculation(1, 1, sum);
showCalculation(1, 1, multiply);
showCalculation(10, 2, division);
