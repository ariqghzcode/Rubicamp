function arrayAnalyzer(arr) {
  const length = arr.length;

  // ===== STATISTICS =====
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const average = Math.round((sum / length) * 100) / 100;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const sortedForMedian = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(length / 2);
  const median = length % 2 === 0
    ? (sortedForMedian[mid - 1] + sortedForMedian[mid]) / 2
    : sortedForMedian[mid];

  const frequency = {};
  arr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  let mode = null;
  let maxFreq = 1;
  for (const key in frequency) {
    if (frequency[key] > maxFreq) {
      maxFreq = frequency[key];
      mode = Number(key);
    }
  }

  const statistics = { sum, average, min, max, median, mode };

  // ===== TRANSFORMATIONS =====
  const doubled = arr.map(x => x * 2);
  const squared = arr.map(x => x * x);
  const filtered = arr.filter(x => x > average);
  const reversed = [...arr].reverse();

  const transformations = { doubled, squared, filtered, reversed };

  // ===== SORTED =====
  const ascending = [...arr].sort((a, b) => a - b);
  const descending = [...arr].sort((a, b) => b - a);

  const sorted = { ascending, descending };

  // ===== VALIDATION =====
  const allNumbers = arr.every(x => typeof x === "number");
  const hasNegatives = arr.some(x => x < 0);
  const hasZeros = arr.some(x => x === 0);
  const hasDuplicates = new Set(arr).size !== arr.length;

  const validation = { allNumbers, hasNegatives, hasZeros, hasDuplicates };

  return {
    original: arr,
    length,
    statistics,
    transformations,
    sorted,
    validation
  };
}

let data = [5, 2, 8, 1, 9, 3];
let result = arrayAnalyzer(data);
console.log(result);