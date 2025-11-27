const student = Symbol("Wout");
const person = Symbol("Wout");

console.log(
  student,
  student.toString(),
  student.description,
  student === person
);

const STATES = {
  LOADING: Symbol("Laden"),
  LOADED: Symbol("Laden"),
};

console.log(STATES.LOADED === STATES.LOADING);
