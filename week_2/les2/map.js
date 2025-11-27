//VAT bij europese webshop
//BTW bij belgische webshop

const regionNotation = "btw";

const product = {
  price: 25,
  name: "Gameboy",
  [regionNotation]: 21,
};

const productKeys = Object.keys(product);

product.color = "red";
product.color = "blue";
product[regionNotation] = 32;

productKeys.length;

const map = new Map();
map.set("price", 25);
map.set("name", "Gameboy");
map.set("color", "red");
map.set("color", "blue");

const productMapLength = map.size;

console.log(product, map);
