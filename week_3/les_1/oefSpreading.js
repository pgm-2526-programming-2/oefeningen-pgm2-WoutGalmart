//oef1
function copyArray(array) {
  let newArray = [...array];
  return newArray;
}

const originalArray = [1, 2, 3];
const copiedArray = copyArray(originalArray);
console.log(copiedArray); // Output: [1, 2, 3]

//oef2
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//oef3
function addProperty(obj, newProp, newPropValue) {
  return { ...obj, [newProp]: newPropValue };
}

const originalObject = { name: "Alice" };
const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject); // Output: { name: 'Alice', age: 25 }

//oef4

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

//oef5
function add(...args) {
  return args.length;
}

console.log(add(1, 5, 6)); // 3
console.log(add(1, 5, 6, 5, 1561, 2, 5)); // 7

//oef6
function combineAllArrays(...arrays) {
  return arrays.flat();
}

console.log(combineAllArrays([10, 12], [5, 4])); // [10, 12, 5, 4]
console.log(combineAllArrays([10, 12], [5, 4], [6, 6, 6])); // [10, 12, 5, 4, 6, 6]

//oef7

function addOnlyNumbers(...args) {
  return console.log(
    "Er waren",
    args.length,
    "argumenten de som van te getallen is",
    args
      .filter((arg) => typeof arg === "number")
      .reduce((prev, curr) => prev + curr, 0)
  );
}

addOnlyNumbers(1, 5, 6, "cat", "dog", 3); // Er waren 6 argumenten, de som van de getallen is 15.
