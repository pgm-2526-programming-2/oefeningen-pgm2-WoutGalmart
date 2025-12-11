const express = require("express");
const path = require("path");
const filesystemModule = require("fs");

const PORT = 3000;
const HOST = "localhost";
const myServer = express();

function recipes() {
  const recipesPath = path.join(".", "recipes.json");
  const recipesContent = filesystemModule.readFileSync(recipesPath, "utf-8");
  const recipes = JSON.parse(recipesContent);

  return recipes;
}

myServer.get("/api", (request, response) => {
  const localTime = new Date().toLocaleTimeString("be-BE");

  console.log("verzoek op de server");
  response.status(200);
  //response.send(`Server is running at ${localTime}`);
  response.json({ name: "Wout", requestTime: localTime });
});

myServer.get("/api/recipes", (request, response) => {
  response.status(200);
  response.json(recipes());
});

myServer.get("/api/recipes", (request, response) => {
  response.status(200).json(recipes());
});

myServer.listen(PORT, HOST, () => {
  console.log(`server staan aan op http://${HOST}:${PORT}`);
});

console.log("Server bestand");
