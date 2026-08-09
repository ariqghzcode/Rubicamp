// Tulis function searchArray di sini
function searchArray(arr, criteria) {
    const { type, value, condition } = criteria;

    let testFunction;
  if (type === "number") {
    if (condition === "greater") {
      testFunction = (item) => item > value;
    }
  } else if (type === "string") {
    if (condition === "contains") {
      testFunction = (item) => item.includes(value);
    }

    const found = [...arr];
    const filtered = arr.filter(testFunction);
    const includesResult = arr.includes(value);

    return {
        found: found,
        filtered: filtered,
        includes: includesResult,
        count: filtered.length
    }
  }
}
let numbers = [1, 5, 10, 15, 20];
console.log(searchArray(numbers, { type: "number", value: 10, condition: "greater" }));

let words = ["apple", "banana", "cherry"];
console.log(searchArray(words, { type: "string", value: "an", condition: "contains" }));