// Tulis function validateEmail di sini
function validateEmail(email) {
    let trimmed = email.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let valid = emailPattern.test(trimmed);

    return { valid: valid, email: trimmed };
}
console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail("  test@domain.co.id  "));