// Tulis function textAnalyzer di sini
function textAnalyzer(text) {
    let cleaned = text.trim();
    let words = cleaned.split(/\s+/);

    let sentenceCount = cleaned.split(".").filter(s => s.trim() !== "").length;

    let uppercaseCount = 0;
    let lowercaseCount = 0;
    for (let i = 0; i < cleaned.length; i++) {
        let char = cleaned[i];
        if (char >= 'A' && char <= 'Z') {
            uppercaseCount++;
        } else if (char >= 'a' && char <= 'z') {
            lowercaseCount++;
        }
    }
    let longestWord = words[0];
    let shortestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) longestWord = words[i];
        if (words[i].length < shortestWord.length) shortestWord = words[i];
    }

    let hasNumbers = /[0-9]/.test(cleaned);
    let hasSpecialChars = /[^a-zA-Z0-9\s]/.test(cleaned);

    return {
        original: text,
        cleaned: cleaned,
        stats: {
            totalLength: text.length,
            cleanedLength: cleaned.length,
            wordCount: words.length,
            sentenceCount: sentenceCount,
            uppercaseCount: uppercaseCount,
            lowercaseCount: lowercaseCount
        },
        words: words,
        longestWord: longestWord,
        shortestWord: shortestWord,
        hasNumbers: hasNumbers,
        hasSpecialChars: hasSpecialChars
    };

}
let result = textAnalyzer("  Hello World! This is a TEST string.  ");
console.log(result);