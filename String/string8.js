// Tulis function cleanAndFormat di sini
function cleanAndFormat(text, width) {
    let cleaned = text.trim().replace(/\s+/g, ' ');

    let totalPadding = width - cleaned.length;
    let leftPadding = Math.floor(totalPadding / 2);

    let padded = cleaned.padStart(cleaned.length + leftPadding, ' ');
    padded = padded.padEnd(width, ' ');


    return {
        cleaned: cleaned,
        padded: padded,
        length: padded.length
    }
}

console.log(cleanAndFormat("  Hello   World  ", 15));
console.log(cleanAndFormat("JavaScript", 12));
console.log(cleanAndFormat("  Code  ", 8));