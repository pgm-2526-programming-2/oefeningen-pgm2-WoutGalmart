const express = require("express");
const { getAllQuotes } = require("./controllers/quotes.controller");
const quotesRouter = require("./routes/quotes.routes");

const app = express();

app.use("/api/", quotesRouter);

//app.get("/api/quotes", getAllQuotes);

app.listen(8080, "localhost", (err) => {
  if (err) {
    return console.error(err.message);
  }

  console.log("server is opgestart en draaiende op http://localhost:8080");
});
