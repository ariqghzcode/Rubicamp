// Tulis function extractText di sini
function extractText(text, start, end) {
    let isValid = start >= 0 && start <= text.length;
    let result = isValid ? text.slice(start, end) : "";

    return {
        result: result,
        success: isValid,
        original: text
    }
}
console.log(extractText("JavaScript", 0, 4));
console.log(extractText("Programming", 3, 7));
console.log(extractText("Hello", 10, 15));