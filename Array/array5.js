// Tulis function arrayOperations di sini
function arrayOperations(arr, start, deleteCount, items) {

    const original = [...arr];
    const sliced = arr.slice(start);
    const removed = arr.splice(start, deleteCount, ...items);

    return {
        original: original,
        sliced: sliced,
        spliced: arr,
        removed: removed

    };

}

console.log(arrayOperations([1, 2, 3, 4, 5], 1, 2, [10, 20]));
console.log(arrayOperations(["a", "b", "c", "d"], 0, 1, ["x"]));