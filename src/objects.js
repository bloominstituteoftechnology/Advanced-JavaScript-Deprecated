// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.getOwnPropertyNames(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const array = [];
  const keysArray = keys(obj);
  for (let i = 0; i < keysArray.length; i++) {
    array.push(obj[keysArray[i]]);
  }
  return array;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const keysArray = keys(obj);
  const valueArray = values(obj);
  for (let i = 0; i < keysArray.length; i++) {
    obj[keysArray[i]] = cb(valueArray[i]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const keysArray = keys(obj);
  const valueArray = values(obj);
  const newArray = [];
  for (let i = 0; i < keysArray.length; i++) {
    const tempArray = [keysArray[i], valueArray[i]];
    newArray.push(tempArray);
  }
  return newArray;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const keysArray = keys(obj);
  const valueArray = values(obj);
  const newObj = {};
  for (let i = 0; i < keysArray.length; i++) {
    newObj[valueArray[i]] = keysArray[i];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const keysArray = keys(defaultProps);
  const valueArray = values(defaultProps);
  for (let i = 0; i < keysArray.length; i++) {
    if (Object.hasOwnProperty.call(obj, keysArray[i]) === false) {
      obj[keysArray[i]] = valueArray[i];
    }
  }
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
