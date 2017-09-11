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
  const arr = [];
  const objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    arr.push(obj[objKeys[i]]);
  }
  return arr;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newObj = {};
  const objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    newObj[objKeys[i]] = cb(obj[objKeys[i]]);
  }
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const pair = [];
  const objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    pair.push([objKeys[i], obj[objKeys[i]]]);
  }
  return pair;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const inverted = {};
  const objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    inverted[obj[objKeys[i]]] = objKeys[i];
  }
  return inverted;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    defaultProps[objKeys[i]] = obj[objKeys[i]];
  }
  return defaultProps;
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
