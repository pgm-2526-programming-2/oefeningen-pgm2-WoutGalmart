const { getFile } = require("../utils/file.utils");

function getAllQuotes(req, res) {
  res.json(getFile("quotes.json"));
}

function getQuoteById(req, res) {
  const quotes = getFile("quotes.json");
  // req.query voor te filteren
  const { questionId } = req.params;

  const quote = quotes.find((quote) => quote.id === questionId);
  res.json(quote);
}

module.exports = { getAllQuotes, getQuoteById };
