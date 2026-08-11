// Tulis function aggregateArray di sini
function aggregateArray(arr) {
  const isNumberArray = typeof arr[0] === "number";

  if (isNumberArray) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    const product = arr.reduce((acc, cur) => acc * cur, 1);
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sortedAsc = [...arr].sort((a, b) => a - b);
    const sortedDesc = [...arr].sort((a, b) => b - a);

    return {
      original: arr,
      sum,
      product,
      max,
      min,
      sortedAsc,
      sortedDesc
    };
  } else {
    const concatenated = arr.reduce((acc, cur) => acc + cur, "");
    const longest = arr.reduce((a, b) => (a.length >= b.length ? a : b));
    const shortest = arr.reduce((a, b) => (a.length <= b.length ? a : b));
    const sortedAsc = [...arr].sort((a, b) => a.localeCompare(b));
    const sortedDesc = [...arr].sort((a, b) => b.localeCompare(a));

    return {
      original: arr,
      concatenated,
      longest,
      shortest,
      sortedAsc,
      sortedDesc
    };
  }
}

console.log(aggregateArray([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(aggregateArray(["banana", "apple", "cherry", "date"]));