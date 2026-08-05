// Tulis function createCalculator di sini
function createCalculator() {
    let history = [];

    function recordHistory(operation, operands, result) {
        history.push({
            operation: operation,
            operands: operands,
            result: result
        });
    }

    return {
        add: function (a, b) {
            let result = a + b;
            recordHistory("add", [a, b], result);
            return result;
        },

        subtract: function (a, b) {
            let result = a - b;
            recordHistory("subtract", [a, b], result);
            return result;
        },

        multiply: function (a, b) {
            let result = a * b;
            recordHistory("multiply", [a, b], result);
            return result;
        },

        divide: function (a, b) {
            let result;
            if (b === 0) {
                result = "Error: cannot divide by zero";
            } else {
                result = a / b;
            }
            recordHistory("divide", [a, b], result);
            return result;
        },

        getHistory: function () {
            return history;
        },

        reset: function () {
            history = [];
        }
    };
}
let calc = createCalculator();
console.log(calc.add(5, 3));
console.log(calc.multiply(4, 2));
console.log(calc.divide(10, 2));
console.log(calc.getHistory());
calc.reset();
console.log(calc.getHistory());