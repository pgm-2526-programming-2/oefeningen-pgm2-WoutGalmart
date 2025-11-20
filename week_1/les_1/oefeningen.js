function greetings(name = "daar") {
  return "hallo " + name;
}

console.log(greetings("Wout"));

function controlAge(age) {
  if (age >= 18) {
    return "Volwassen";
  } else {
    return "Nog niet volwassen";
  }
}
console.log(controlAge(16));
console.log(controlAge(21));

function myCallback() {
  console.log("dit is de callback functie");
}

function mainLogic(callback) {
  return callback;
}

mainLogic(myCallback());

function increaseByTen(num) {
  console.log(num + 10);
}

let myNumber = 20;

increaseByTen(myNumber);

console.log("Number:", myNumber);

let test = "test";

function showName() {
  let test = "andere test";
  console.log("inside function", test);
}

showName();
console.log("outside function", test);
