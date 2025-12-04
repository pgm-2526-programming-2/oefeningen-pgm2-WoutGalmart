const { pushBooks, pushMembers, pushLoans } = require("./pushing");
const { returnedBooks } = require("./returns");
const { booksList, membersList, loansList } = require("./lists");
const { loansPerMember } = require("./loans");

// Ongeorganiseerd en complex script voor bibliotheekbeheer

const books = pushBooks();
const members = pushMembers();
const loans = pushLoans();

returnedBooks(loans);

booksList(books);
membersList(members);
loansList(loans, books, members);
loansPerMember(loans, members);
