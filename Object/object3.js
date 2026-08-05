// Tulis function processObjectData di sini
function processObjectData(obj) {
  let entries = Object.entries(obj);
  
  // Filter berdasarkan tipe data
  let strings = entries.filter(([key, value]) => typeof value === "string");
  let numbers = entries.filter(([key, value]) => typeof value === "number");
  let booleans = entries.filter(([key, value]) => typeof value === "boolean");
  
  // Transform: key jadi UPPERCASE, value diubah sesuai tipe
  let transformedEntries = entries.map(([key, value]) => {
    let newKey = key.toUpperCase();
    let newValue;
    
    if (typeof value === "string") {
      newValue = value.toUpperCase();
    } else if (typeof value === "number") {
      newValue = value * 2;
    } else {
      newValue = value;
    }
    
    return [newKey, newValue];
  });
  
  return {
    original: obj,
    byType: {
      strings: Object.fromEntries(strings),
      numbers: Object.fromEntries(numbers),
      booleans: Object.fromEntries(booleans)
    },
    transformed: Object.fromEntries(transformedEntries)
  };
}

let data = {
  name: "Product A",
  price: 100,
  inStock: true,
  category: "Electronics",
  rating: 4.5
};
console.log(processObjectData(data));