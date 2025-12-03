// _____________________________________
// ARRAY DESTRUCTURING
// _____________________________________
const person = ["Wout", "Galmart"];

const firstName = person[0];
const lastName = person[1];

const [first, last] = person;

const results = ["Ignace", "Arif", "Kobe", "Justin"];

const [firstWinner, , thirdWinner] = results;

//console.log(firstWinner, thirdWinner);

const songs = [
  {
    name: "Ophelia",
    artist: "Taylor Swift",
  },
  {
    name: "Still DRE",
    artist: "Snoop Dogg",
  },
];

const [, firstTrack, lastTrack] = songs;
console.log(lastTrack); // undefined

const [head, ...tail] = [1, 2, 3, 4, 5];

// _____________________________________
// OBJECT DESTRUCTURING
// _____________________________________

const persoon = {
  fN: "Wout",
  lN: "Galmart",
  age: 19,
};

/*
const fN = persoon.fN;
const lN = persoon.lN;
const age = persoon.age;
*/
//const { fN, lN, age } = persoon;

const { fN, age } = persoon;

console.log(fN, age);

const options = {
  c: 20000,
  w: 3000,
  mod: "C8",
};

const { w: weight, mod: model, c: cost } = options;

const { w: altWeight, ...rest } = options;

const song = {
  name: "Flowers",
  artist: "Miley",
};

const edit = {
  nme: "7 Things",
};

function editSong(s, { name }) {
  s.name = name;
}

editSong(song, edit);
