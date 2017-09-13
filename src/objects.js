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
  // const newArray = [];
  // const keysArray = Object.getOwnPropertyNames(obj); // creates an array that holds all properties' names.
  // for (let i = 0; i < keysArray.length; i++) {       // using the properties' length to regulate the loop
  //   newArray.push(obj[keysArray[i]]);
  // }
  // return newArray;
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newObj = {};
  const keysArray = Object.getOwnPropertyNames(obj); // creates an array that holds all properties' names.
  for (let i = 0; i < keysArray.length; i++) {
    newObj[keysArray[i]] = cb(obj[keysArray[i]]);
  }
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.entries(obj);
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObject = {};
  Object.keys(obj).forEach((keyElement) => {
    newObject[obj[keyElement]] = keyElement;
  });
  return newObject;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((keyElement) => {
    if (!obj[keyElement]) {
      obj[keyElement] = defaultProps[keyElement];
    }
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
