function loansPerMember(loans, members) {
  // Bereken het aantal uitgeleende boeken per lid
  const loansPerMember = {};
  loans.forEach((loan) => {
    loansPerMember[loan.memberId] = (loansPerMember[loan.memberId] || 0) + 1;
  });

  // Weergave van het aantal uitgeleende boeken per lid
  console.log("\nAantal uitgeleende boeken per lid:");
  console.log("==================================");
  Object.keys(loansPerMember).forEach((memberId) => {
    const member = members.find((m) => m.id == memberId);
    console.log(`${member.name}: ${loansPerMember[memberId]} boeken`);
  });
}

module.exports = { loansPerMember };
