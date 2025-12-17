const { getContentFromFile } = require("../utils/files.utils");
const fileSystem = require("fs/promises");
const pathModule = require("path");
const filePath = pathModule.join(__dirname, "..", "models", "locations.json");

function getLocations(req, res) {
  console.log("GET Locations");
  res.json("data verstuurd naar gebruiker");
}

async function addLocation(req, res) {
  const locations = await getContentFromFile("locations.json");
  locations.push(req.body);

  await fileSystem.writeFile(
    filePath,
    JSON.stringify(locations, null, 2),
    "utf-8"
  );

  console.log("POST Location", req.body);
  res.status(201);
  res.json("data succesvol toegevoegd");
}

module.exports = {
  getLocations,
  addLocation,
};
