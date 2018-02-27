// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the 'cb' function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const newObj = Object.keys(obj);
  return newObj;
  // Ryan going over these in today video Sept 11 copy then delete this comment
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const newObj = Object.values(obj);
  return Object.values(newObj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of
  // each property in turn.
  // http://underscorejs.org/#mapObject
  const arrayOfKeys = Object.keys(obj);
  each(arrayOfKeys, (key) => {
    obj[key] = cb(obj[key]);
  });
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  return Object.entries(obj);
  // http://underscorejs.org/#pairs
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  // return obj;
  const result = {};
  const newKeys = Object.keys(obj);
  for (let i = 0, length = newKeys.length; i < length; i++) {
    if (result[obj[newKeys[i]]] instanceof Array) {
      result[obj[newKeys[i]]].push(newKeys[i]);
    } else if (result[obj[newKeys[i]]]) {
      const temp = result[obj[newKeys[i]]];
      result[obj[newKeys[i]]] = [temp, newKeys[i]];
    } else {
      result[obj[newKeys[i]]] = newKeys[i];
    }
  }
  return result;
};

const defaults = (obj, defaultProps) => {
// Fill in undefined properties that match properties on the
// `defaultProps` parameter object.
// http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((key) => {
    obj[key] = obj[key] || defaultProps[key];
  });
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
