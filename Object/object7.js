// Tulis function transformObjectArray di sini
function transformObjectArray(data, config) {
  let result = [...data];
  
  // STEP 1: FILTER
  if (config.filter) {
    result = applyFilter(result, config.filter);
  }
  
  // STEP 2: MAP (tambah property baru hasil hitungan)
  if (config.map) {
    result = applyMap(result, config.map);
  }
  
  // STEP 3: SORT
  if (config.sort) {
    result = applySort(result, config.sort);
  }
  
  // STEP 4: GROUP
  if (config.group) {
    return applyGroup(result, config.group);
  }
  
  return result;
}

// --- Helper untuk FILTER ---
function applyFilter(items, filterConfig) {
  let filtered = [];
  
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let itemValue = item[filterConfig.key];
    let passes = checkCondition(itemValue, filterConfig.operator, filterConfig.value);
    
    if (passes) {
      filtered.push(item);
    }
  }
  
  return filtered;
}

function checkCondition(itemValue, operator, targetValue) {
  if (operator === ">=") {
    return itemValue >= targetValue;
  } else if (operator === ">") {
    return itemValue > targetValue;
  } else if (operator === "<=") {
    return itemValue <= targetValue;
  } else if (operator === "<") {
    return itemValue < targetValue;
  } else if (operator === "==") {
    return itemValue == targetValue;
  } else if (operator === "!=") {
    return itemValue != targetValue;
  } else {
    return false;
  }
}

// --- Helper untuk MAP ---
function applyMap(items, mapConfig) {
  let mapped = [];
  
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let newItem = Object.assign({}, item); // salin object asli
    
    for (let newKey in mapConfig) {
      let expression = mapConfig[newKey];
      newItem[newKey] = evaluateExpression(expression, item);
    }
    
    mapped.push(newItem);
  }
  
  return mapped;
}

function evaluateExpression(expression, item) {
  // Contoh expression: "price * 1.1"
  let parts = expression.split(" ");
  let variableName = parts[0];
  let operator = parts[1];
  let operand = parseFloat(parts[2]);
  
  let variableValue = item[variableName];
  
  if (operator === "*") {
    return variableValue * operand;
  } else if (operator === "+") {
    return variableValue + operand;
  } else if (operator === "-") {
    return variableValue - operand;
  } else if (operator === "/") {
    return variableValue / operand;
  } else {
    return variableValue;
  }
}

// --- Helper untuk SORT ---
function applySort(items, sortConfig) {
  let sorted = [...items];
  
  sorted.sort(function(a, b) {
    let valueA = a[sortConfig.key];
    let valueB = b[sortConfig.key];
    
    if (sortConfig.order === "desc") {
      if (valueA > valueB) {
        return -1;
      } else if (valueA < valueB) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (valueA > valueB) {
        return 1;
      } else if (valueA < valueB) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  
  return sorted;
}

// --- Helper untuk GROUP ---
function applyGroup(items, groupKey) {
  let grouped = {};
  
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let keyValue = item[groupKey];
    
    if (!grouped[keyValue]) {
      grouped[keyValue] = [];
    }
    grouped[keyValue].push(item);
  }
  
  return grouped;
}

let products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics", rating: 4.5 },
  { id: 2, name: "Phone", price: 500, category: "Electronics", rating: 4.2 },
  { id: 3, name: "Book", price: 20, category: "Education", rating: 4.8 }
];

let config = {
  filter: { key: "price", operator: ">=", value: 100 },
  map: { priceWithTax: "price * 1.1" },
  sort: { key: "rating", order: "desc" },
  group: "category"
};

console.log(transformObjectArray(products, config));