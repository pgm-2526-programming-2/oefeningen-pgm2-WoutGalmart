const fileSystem = require("fs/promises");
const pathModule = require("path");

async function getContentFromFile(fileName) {
  const pathToFile = pathModule.join(__dirname, "..", "models", fileName);
  const fileContentAsString = await fileSystem.readFile(pathToFile, "utf-8");
  const fileContentAsObject = JSON.parse(fileContentAsString);
  return fileContentAsObject;
}

module.exports = {
  getContentFromFile,
};
