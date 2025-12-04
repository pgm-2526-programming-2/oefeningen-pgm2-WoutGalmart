//throw "Fout";

const message = new Error("Er ging iets mis");

//throw message;

try {
  console.log(edsf);

  console.log("we voeren code uit");
} catch (error) {
  console.log("er gaat iets mis");
} finally {
  console.log("dit wordt altijd uitgevoerd");
}
