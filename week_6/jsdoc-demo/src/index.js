/**
 * @author Wout Galmart
 */

/**
 *  * @typedef {{id: number|string, name: string, amountOfStudents: number, isImportant: boolean}} CourseType

 */

/**
 * a definition of a studenttype
 * @typedef {object} StudentType
 * @property {string} name the name of the student
 * @property {number} age the age of the student
 */

/**
 *  student name
 * @type {string}
 */

const studentName = "Wout";

/**
 * this is the info of a random student
 * @type {StudentType}
 */

const student = {
  name: "Wout",
  age: 19,
};

/**
 * This is a description of a course and its properties
 * @type {CourseType}
 */

const course = {
  id: "1249241410249",
  name: "programming 2: advanced",
  amountOfStudents: 20,
  isImportant: true,
};

/**
 * This is another description of a course and its properties
 * @type {CourseType}
 */

const secondCourse = {
  id: "0918248724",
  name: "Atwork 2: advanced",
  amountOfStudents: 20,
  isImportant: true,
};

/**
 * This logs a message in our console
 */
function sayHello() {
  console.log("Hello World");
}

/**
 * this function calculates the sum of two values
 * @param {number} a first number
 * @param {number} b second number
 * @returns {string}
 */

function sum(a, b) {
  return `de som van ${a} en ${b} is ${a + b}`;
}
