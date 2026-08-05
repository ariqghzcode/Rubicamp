// Tulis function extractUserData di sini
function extractUserData(user) {
    let {
        id: userId,
        profile: {
            name: fullName,
            email,
            address: { street, city, zipCode }
        },
        preferences: settings
    } = user;

    let location = `${street}, ${city} ${zipCode}`;

    let isComplete = Boolean(userId && fullName && email && street && city && zipCode);

    return {
        userId,
        fullName,
        email,
        location,
        settings,
        isComplete
    };

}
let user = {
    id: 1,
    profile: {
        name: "John Doe",
        email: "john@example.com",
        address: {
            street: "Jl. Sudirman",
            city: "Jakarta",
            zipCode: "12345"
        }
    },
    preferences: {
        theme: "dark",
        language: "id"
    }
};
console.log(extractUserData(user));