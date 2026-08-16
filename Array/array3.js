// Tulis function manageStack di sini
function manageStack(arr, operations) {
    const log = [];

    operations.forEach(op => {
        if (op.startsWith('push')) {
            const value = isNaN(Number(op.slice(5))) ? op.slice(5) : Number(op.slice(5))
            arr.push(value)
            log.push(`Added ${value}`)

        } else if (op.startsWith('pop')) {
            const value = arr.pop();
            log.push(`Removed ${value}`);
        }
    })
    return {
        result: arr,
        log
    };

}
console.log(manageStack([1, 2], ["push:3", "push:4", "pop"]));
console.log(manageStack([], ["push:a", "push:b", "pop", "push:c"]));