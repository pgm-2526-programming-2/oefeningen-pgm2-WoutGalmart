const process = require("process");
const path = require("path");
const filesystemModule = require("fs");

//const studentsPath = "./students.json";
const studentsPath = path.join(".", "students.json");

const fileContent = filesystemModule.readFileSync(studentsPath, "utf-8");

const fileContentAsArray = JSON.parse(fileContent);

fileContentAsArray.push({
  name: "New Student",
  age: 20,
});

console.log(fileContentAsArray);

filesystemModule.writeFileSync(
  studentsPath,
  JSON.stringify(fileContentAsArray)
);

//const pathToFunctionsCourse = "../../week_1/les_1/functions.js ";
const pathToFunctionsCourse = path.join(
  "..",
  "..",
  "week_1",
  "les_1",
  "functions.js"
);
console.log(__dirname);
