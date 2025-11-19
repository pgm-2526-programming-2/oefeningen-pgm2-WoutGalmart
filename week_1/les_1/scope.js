const message = "Hello";

function sayHello() {
  const message = "hello2";

  const say = function () {
    console.log(message);
  };

  say();
}

sayHello();
console.log(message);
