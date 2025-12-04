function booksList(books) {
  // Weergave van boeken
  console.log("Boekenlijst:");
  console.log("============");
  books.forEach((book) =>
    console.log(
      `ID: ${book.id}, Titel: ${book.title}, Auteur: ${book.author}, Genre: ${book.genre}`
    )
  );
}

function membersList(members) {
  // Weergave van leden
  console.log("\nLedeninformatie:");
  console.log("=================");
  members.forEach((member) =>
    console.log(
      `ID: ${member.id}, Naam: ${member.name}, Lidmaatschap: ${member.membershipType}`
    )
  );
}

function loansList(loans, books, members) {
  // Weergave van uitleningen
  console.log("\nUitleningen:");
  console.log("============");
  loans.forEach((loan) => {
    const book = books.find((b) => b.id === loan.bookId);
    const member = members.find((m) => m.id === loan.memberId);
    console.log(
      `Boek: ${book.title}, Lid: ${member.name}, Vervaldatum: ${loan.dueDate}, Geretourneerd: ${loan.returned}`
    );
  });
}
module.exports = { booksList, membersList, loansList };
