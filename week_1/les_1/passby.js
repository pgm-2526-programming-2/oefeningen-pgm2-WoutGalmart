let total = 0;

function addFiveNumber(a = 0) {
  total = a + 5;
  console.log(a + 5);
}

//addFiveNumber(2);

//console.log("Total ", total);

function doubleNumber(num) {
  num = num * 2;
  console.log("Inside function ", num);
}

function doubleNumberWithRef(obj) {
  obj.number = obj.number * 2;
  console.log("Inside function with ref ", obj.number);
}

let originalNumber = 5;
let originealNUmberAsRef = { number: 5 };

doubleNumber(originalNumber);
doubleNumberWithRef(originealNUmberAsRef);

console.log("Outside function ", originalNumber);
console.log("Outside function with ref ", originealNUmberAsRef.number);
