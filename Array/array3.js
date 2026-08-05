// Tulis function manageStack di sini
function manageStack(arr, operations) {
    let result = [...arr];
    let log = [];

    operations.forEach(op => {
        if (op.startsWith("push:")) {
            let rawValue = op.split(":")[1];
            let value;
            if (isNaN(Number(rawValue))) {
                value = rawValue;
            } else {
                value = Number(rawValue);
            }

            result.push(value);
            log.push(`Added ${value}`);
            
        } else if (op === "pop") {
            let removed = result.pop();
            log.push(`Removed ${removed}`);
        }
    });

    return { result, log };

}
console.log(manageStack([1, 2], ["push:3", "push:4", "pop"]));
console.log(manageStack([], ["push:a", "push:b", "pop", "push:c"]));