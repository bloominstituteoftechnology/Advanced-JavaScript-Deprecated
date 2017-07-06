// Retrieve all the property names of an object.
var obj = {a:1,b:2};

const allKeys = (obj) => {
  if (typeof obj !== 'object') return [];
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
};

console.log(allKeys(obj));
