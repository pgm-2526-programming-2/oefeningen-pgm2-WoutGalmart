function returnedBooks(loans) {
  // Simuleer enkele boeken die zijn teruggebracht
  loans[0].returned = true;
  loans[2].returned = true;
}

module.exports = { returnedBooks };
