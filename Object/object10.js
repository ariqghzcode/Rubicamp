// Tulis function objectAnalyzer di sini
function objectAnalyzer(obj) {
  let structure = analyzeStructure(obj);
  let analysis = analyzeContent(obj);
  let flattened = flattenObject(obj, "");
  
  return {
    structure: structure,
    analysis: analysis,
    flattened: flattened
  };
}

function isPlainObject(value) {
  if (typeof value === "object" && value !== null && Array.isArray(value) === false) {
    return true;
  } else {
    return false;
  }
}

// --- 1. ANALISIS STRUKTUR (depth, totalKeys, dll) ---
function analyzeStructure(obj) {
  let totalKeys = 0;
  let arrayCount = 0;
  let objectCount = 0;
  let primitiveCount = 0;
  let maxDepth = 1;
  
  function walk(value, currentDepth, isRoot) {
    if (currentDepth > maxDepth) {
      maxDepth = currentDepth;
    }
    
    if (Array.isArray(value)) {
      arrayCount = arrayCount + 1;
      for (let i = 0; i < value.length; i++) {
        walk(value[i], currentDepth, false); // array TIDAK menambah depth
      }
    } else if (isPlainObject(value)) {
      if (isRoot === false) {
        objectCount = objectCount + 1;
      }
      let keys = Object.keys(value);
      totalKeys = totalKeys + keys.length;
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        walk(value[key], currentDepth + 1, false); // object MENAMBAH depth
      }
    } else {
      primitiveCount = primitiveCount + 1;
    }
  }
  
  walk(obj, 1, true);
  
  return {
    depth: maxDepth,
    totalKeys: totalKeys,
    arrayCount: arrayCount,
    objectCount: objectCount,
    primitiveCount: primitiveCount
  };
}

// --- 2. ANALISIS ISI (khusus users & settings) ---
function analyzeContent(obj) {
  let analysis = {};
  
  if (obj.users && Array.isArray(obj.users)) {
    analysis.users = analyzeUsers(obj.users);
  }
  
  if (obj.settings && obj.settings.notifications) {
    analysis.settings = analyzeSettings(obj.settings);
  }
  
  return analysis;
}

function analyzeUsers(users) {
  let count = users.length;
  let totalPosts = 0;
  let totalLikes = 0;
  
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.posts && Array.isArray(user.posts)) {
      totalPosts = totalPosts + user.posts.length;
      for (let j = 0; j < user.posts.length; j++) {
        totalLikes = totalLikes + user.posts[j].likes;
      }
    }
  }
  
  let averageLikes = 0;
  if (totalPosts > 0) {
    averageLikes = totalLikes / totalPosts;
  }
  
  return {
    count: count,
    totalPosts: totalPosts,
    totalLikes: totalLikes,
    averageLikes: averageLikes
  };
}

function analyzeSettings(settings) {
  let enabledFeatures = [];
  let disabledFeatures = [];
  let notifications = settings.notifications;
  
  for (let key in notifications) {
    if (notifications[key] === true) {
      enabledFeatures.push(key);
    } else {
      disabledFeatures.push(key);
    }
  }
  
  return {
    enabledFeatures: enabledFeatures,
    disabledFeatures: disabledFeatures
  };
}

// --- 3. FLATTEN OBJECT ---
function flattenObject(obj, prefix) {
  let result = {};
  
  for (let key in obj) {
    let value = obj[key];
    let newKey = key;
    if (prefix !== "") {
      newKey = prefix + "." + key;
    }
    
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        let arrayKey = newKey + "." + i;
        let item = value[i];
        if (isPlainObject(item) || Array.isArray(item)) {
          let nested = flattenObject(item, arrayKey);
          for (let nestedKey in nested) {
            result[nestedKey] = nested[nestedKey];
          }
        } else {
          result[arrayKey] = item;
        }
      }
    } else if (isPlainObject(value)) {
      let nested = flattenObject(value, newKey);
      for (let nestedKey in nested) {
        result[nestedKey] = nested[nestedKey];
      }
    } else {
      result[newKey] = value;
    }
  }
  
  return result;
}

let complexData = {
  users: [
    { id: 1, name: "Alice", posts: [{ title: "Hello", likes: 10 }] },
    { id: 2, name: "Bob", posts: [{ title: "World", likes: 5 }, { title: "Test", likes: 15 }] }
  ],
  settings: {
    theme: "dark",
    notifications: { email: true, push: false }
  },
  metadata: {
    version: "1.0",
    lastUpdated: "2023-01-01"
  }
};

console.log(objectAnalyzer(complexData));