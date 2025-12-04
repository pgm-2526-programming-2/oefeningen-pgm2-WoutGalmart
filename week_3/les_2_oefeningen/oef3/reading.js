const fs = require("fs");

const text = fs.readFileSync("./leesbestand.txt", "utf-8");

console.log(text);
