function validateArrayData(arr) {
  const allNumbers = arr.every(x => typeof x === "number");
  const hasNulls = arr.some(x => x === null);
  const hasUndefined = arr.some(x => typeof x === "undefined");

  const stats = {
    total: arr.length,
    numbers: arr.filter(x => typeof x === "number").length,
    strings: arr.filter(x => typeof x === "string").length,
    nulls: arr.filter(x => x === null).length,
    undefined: arr.filter(x => typeof x === "undefined").length
  };

  const cleaned = arr.filter(x => typeof x === "number");

  return {
    isValid: allNumbers,
    allNumbers,
    hasNulls,
    hasUndefined,
    stats,
    cleaned
  };
}

let data1 = [1, 2, 3, 4, 5];
let data2 = [1, "2", 3, null, 5, undefined];
console.log(validateArrayData(data1));
console.log(validateArrayData(data2));