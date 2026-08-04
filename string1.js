// Tulis function getStringInfo di sini
function getStringInfo(text) {
    return {
        length: text.length,
        first: text[0],
        last: text[text.length - 1],
    
};
}

console.log(getStringInfo("Hello"));
console.log(getStringInfo("JavaScript"));
console.log(getStringInfo("A"));