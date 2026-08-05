// Tulis function manageQueue di sini
function manageQueue(arr, operations) {
    let enqueue = 0;
    let dequeue = 0;

    operations.forEach(element => {
        if (element.startsWith("enqueue:")) {
            let value = isNaN(Number(element.slice(8))) ? element.slice(8) : Number(element.slice(8)) // ? ternary untuk kondisi seperti if
            arr.push(value)
            enqueue++;

        } else {
            arr.shift()
            dequeue++;
        }
    })
    return {

        result: arr,

        stats: { enqueued: enqueue, dequeued: dequeue, operations: enqueue + dequeue }
    }
};

console.log(manageQueue([1, 2], ["enqueue:3", "dequeue", "enqueue:4"]));
console.log(manageQueue([], ["enqueue:x", "enqueue:y", "dequeue"]));