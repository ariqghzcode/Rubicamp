// Tulis function getArrayInfo di sini
function getArrayInfo(arr) {
    return {
        length: arr.length,
        first: arr[0],
        last: arr[arr.length - 1],
        isEmpty: arr.length === 0
};
}
console.log(getArrayInfo([1, 2, 3, 4, 5]));
console.log(getArrayInfo(["a", "b", "c"]));
console.log(getArrayInfo([]));