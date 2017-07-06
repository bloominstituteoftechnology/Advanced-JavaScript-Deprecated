// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const keyArr = keys(obj);
  const valArr = values(obj);
  for (let i = 0; i < valArr.length; i++) {
    valArr[i] = cb(valArr[i]);
  }
  const mappedObj = {};
  for (let i = 0; i < keyArr.length; i++) {
    mappedObj[keyArr[i]] = valArr[i];
  }
  return mappedObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const keyArr = keys(obj);
  const valArr = values(obj);
  const pairArr = [];
  for (let i = 0; i < keyArr.length; i++) {
    pairArr.push([]);
  }
  for (let i = 0; i < keyArr.length; i++) {
    pairArr[i].push(keyArr[i]);
    pairArr[i].push(valArr[i]);
  }
  return pairArr;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const keyArr = keys(obj);
  const valArr = values(obj);
  const mappedObj = {};
  for (let i = 0; i < keyArr.length; i++) {
    mappedObj[valArr[i]] = keyArr[i];
  }
  return mappedObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
