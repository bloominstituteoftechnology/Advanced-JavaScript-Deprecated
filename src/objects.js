// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars */

// Object.keys(obj).forEach(key => {
//   console.log(key, obj[key]);
// });

const keys = obj => (
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  Object.keys(obj)
);

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const result = [];
  Object.keys(obj).forEach((key) => {
    result.push(obj[key]);
  });
  return result;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  Object.keys(obj).forEach((key) => {
    obj[key] = cb(obj[key]);
  });
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list (array) of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const result = [];
  Object.keys(obj).forEach((key) => {
    result.push([key, obj[key]]);
  });
  return result;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const tempObj = {};
  Object.keys(obj).forEach((key) => {
    tempObj[obj[key]] = key;
  });
  return tempObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((key) => {
    if (!(key in obj)) obj[key] = defaultProps[key];
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
  defaults,
};
