// Tulis function replaceText di sini
function replaceText(text, oldText, newText) {
    let parts = text.split(oldText);
    let replacements = parts.length - 1;
    let result = parts.join(newText);


    return {
        result: result,
        replacements: replacements,
        original: text
    }
}
console.log(replaceText("Hello world hello", "hello", "hi"));
console.log(replaceText("test test test", "test", "exam"));
console.log(replaceText("JavaScript", "Python", "Java"));