// Tulis function searchInText di sini
function searchInText(text, searchTerm) {
    return {
        found: text.length,
        firstIndex: text[0],
        count: text[text.length - 1],
        
};
}
console.log(searchInText("Hello world hello", "hello"));
console.log(searchInText("JavaScript is awesome", "Python"));
console.log(searchInText("test test test", "test"));