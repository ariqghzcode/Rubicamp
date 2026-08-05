// Tulis function analyzeElements di sini
function analyzeElements(arr) {
    return arr.map((item, index) => ({
        value: item, 
        index: index,
        tipeData: typeof(item),
    }))
}
console.log(analyzeElements([10, "hello", true]));
console.log(analyzeElements([1, 2, 3]));