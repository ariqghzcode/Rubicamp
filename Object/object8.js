// Tulis function validateObjectSchema di sini

function validateObjectSchema(obj, schema) {
  let errors = [];
  let validatedFields = [];
  let fieldValidStatus = {};
  
  processSchema(obj, schema, "", errors, validatedFields, fieldValidStatus);
  
  let total = validatedFields.length;
  let validCount = 0;
  let invalidCount = 0;
  
  for (let i = 0; i < validatedFields.length; i++) {
    let fieldName = validatedFields[i];
    if (fieldValidStatus[fieldName] === true) {
      validCount = validCount + 1;
    } else {
      invalidCount = invalidCount + 1;
    }
  }
  
  let isValid = false;
  if (errors.length === 0) {
    isValid = true;
  } else {
    isValid = false;
  }
  
  return {
    isValid: isValid,
    errors: errors,
    validatedFields: validatedFields,
    summary: {
      total: total,
      valid: validCount,
      invalid: invalidCount
    }
  };
}

function processSchema(data, schemaObj, prefix, errors, validatedFields, fieldValidStatus) {
  for (let key in schemaObj) {
    let rule = schemaObj[key];
    let fieldName = buildFieldName(prefix, key);
    
    if (rule.type === "object" && rule.properties) {
      validateNestedObject(data, key, rule, fieldName, errors, validatedFields, fieldValidStatus);
    } else {
      validateField(data, key, rule, fieldName, errors, validatedFields, fieldValidStatus);
    }
  }
}

function buildFieldName(prefix, key) {
  if (prefix === "") {
    return key;
  } else {
    return prefix + "." + key;
  }
}

function validateNestedObject(data, key, rule, fieldName, errors, validatedFields, fieldValidStatus) {
  let value = data[key];
  
  let isMissing = false;
  if (value === undefined || value === null) {
    isMissing = true;
  }
  
  if (rule.required === true && isMissing === true) {
    errors.push(fieldName + " is required");
    return;
  }
  
  let nestedData = value;
  if (isMissing === true) {
    nestedData = {};
  }
  
  processSchema(nestedData, rule.properties, fieldName, errors, validatedFields, fieldValidStatus);
}

function validateField(data, key, rule, fieldName, errors, validatedFields, fieldValidStatus) {
  let value = data[key];
  validatedFields.push(fieldName);
  
  let fieldErrors = [];
  
  let isMissing = false;
  if (value === undefined || value === null || value === "") {
    isMissing = true;
  }
  
  if (rule.required === true && isMissing === true) {
    fieldErrors.push(fieldName + " is required");
  }
  
  if (isMissing === false) {
    if (rule.type) {
      let actualType = typeof value;
      if (actualType !== rule.type) {
        fieldErrors.push(fieldName + " must be of type " + rule.type);
      }
    }
    
    if (rule.minLength !== undefined && typeof value === "string") {
      if (value.length < rule.minLength) {
        fieldErrors.push(fieldName + " must have at least " + rule.minLength + " characters");
      }
    }
    
    if (rule.pattern && typeof value === "string") {
      if (!rule.pattern.test(value)) {
        fieldErrors.push(fieldName + " does not match required pattern");
      }
    }
    
    if (rule.min !== undefined && typeof value === "number") {
      if (value < rule.min) {
        fieldErrors.push(fieldName + " must be at least " + rule.min);
      }
    }
    
    if (rule.max !== undefined && typeof value === "number") {
      if (value > rule.max) {
        fieldErrors.push(fieldName + " must be at most " + rule.max);
      }
    }
  }
  
  if (fieldErrors.length > 0) {
    fieldValidStatus[fieldName] = false;
    for (let i = 0; i < fieldErrors.length; i++) {
      errors.push(fieldErrors[i]);
    }
  } else {
    fieldValidStatus[fieldName] = true;
  }
}

let user = {
  name: "John",
  email: "john@example.com",
  age: 25,
  address: {
    street: "Jl. Sudirman",
    city: "Jakarta"
  }
};

let schema = {
  name: { type: "string", required: true, minLength: 2 },
  email: { type: "string", required: true, pattern: /@/ },
  age: { type: "number", required: true, min: 18, max: 100 },
  address: {
    type: "object",
    required: true,
    properties: {
      street: { type: "string", required: true },
      city: { type: "string", required: true }
    }
  }
};

console.log(validateObjectSchema(user, schema));