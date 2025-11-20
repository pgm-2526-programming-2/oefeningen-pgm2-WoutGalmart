function greetings(name = "daar") {
  return "hallo " + name;
}

//console.log(greetings("Wout"));

function controlAge(age) {
  if (age >= 18) {
    return "Volwassen";
  } else {
    return "Nog niet volwassen";
  }
}
// console.log(controlAge(16));
//console.log(controlAge(21));

function myCallback() {
  console.log("dit is de callback functie");
}

function mainLogic(callback) {
  return callback;
}

// mainLogic(myCallback());

function increaseByTen(num) {
  console.log(num + 10);
}

let myNumber = 20;

// increaseByTen(myNumber);

//console.log("Number:", myNumber);

let test = "test";

function showName() {
  let test = "andere test";
  console.log("inside function", test);
}

// showName();
//console.log("outside function", test);

const todoList = [
  {
    task: "Complete Project",
    subtasks: [
      {
        task: "Write Code",
        subtasks: [
          { task: "Implement Feature A" },
          { task: "Test Feature A" },
          { task: "Refactor Code" },
        ],
      },
      {
        task: "Document Project",
        subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
      },
    ],
  },
  {
    task: "Prepare Presentation",
    subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery" }],
  },
];

function todo(tasks) {
  tasks.forEach((item) => {
    console.log("task", item.task);
    if (item.subtasks) {
      todo(item.subtasks);
    }
  });
}
// todo(todoList);

let myVar = 15;

function printVar() {
  console.log(myVar);
}

//printVar();

function sumUpToN(n) {
  if (n <= -n) {
    return n;
  } else {
    console.log(n);
    return n + sumUpToN(n - 1);
  }
}
//sumUpToN(5);

function sumUpToNLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    console.log(i);
  }
  return sum;
}

//sumUpToNLoop(5);

function outerFunction() {
  const innerVar = 25;

  function innerFunction() {
    console.log(innerVar);
  }
  innerFunction();
}

//outerFunction();

function checkScoping() {
  const a = 50;

  if (true) {
    const a = 75;
    console.log("In", a);
  }
  console.log("Out", a);
}

//checkScoping();

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
//console.log(power(2, 3));

function countMyArgs(...args) {
  let sum = 0;

  args.forEach((arg) => {
    const n = arg;
    sum += n;
  });

  console.log(sum);
  return sum;
}

//countMyArgs(3, 5, 2);
//countMyArgs(50, 10, 5, 1, 2);

function multiplyAndRule(a, b) {
  return a * b;
}

console.log(multiplyAndRule(10, 20));

function greetUser(name, isFormal) {
  if (isFormal) {
    return "Meneer " + name;
  } else {
    return "Hoi " + name + "!";
  }
}

//console.log(greetUser("Wout", false));
//console.log(greetUser("Wout", true));
