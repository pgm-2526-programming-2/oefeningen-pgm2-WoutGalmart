const fs = require("fs");
const path = require("path");

function getFile(filename) {
  const filePath = path.join(__dirname, "..", "models", filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContent);

  return data;
}

module.exports = { getFile };
