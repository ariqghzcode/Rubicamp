// Tulis function transformArray di sini
function transformArray(arr, operations) {
    const { multiply, add, logEach } = operations;

    const transformed = arr.map(item => (item * multiply) + add);

    if (logEach) {
        arr.forEach((item, index) => {
            console.log(`Processing ke-${index + 1}: ${item} -> ${transformed[index]}`);
        });
        // Menambahkan baris kosong agar output console terlihat rapi seperti contoh
        console.log("");
    }

    // 3. Menghitung statistik hasil transformasi
    const processed = transformed.length;
    const sum = transformed.reduce((total, num) => total + num, 0);
    const average = sum / processed;

    return {
        original: arr,
        transformed: transformed,
        stats: {
            processed: processed,
            sum: sum,
            average: average
        }
    };
}
let numbers = [1, 2, 4, 6, 9];
console.log(transformArray(numbers, {
    multiply: 2,
    add: 1,
    logEach: true
}));