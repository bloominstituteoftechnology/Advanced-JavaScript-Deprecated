// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = obj => Object.keys(obj);
// Retrieve all the names of the object's properties.
// Return the keys as strings in an array.
// Based on http://underscorejs.org/#keys
// Object.getOwnPropertyNames(obj);

const values = obj => Object.values(obj);
// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values

const mapObject = (obj, cb) => {
  Object.keys(obj).forEach(key => (obj[key] = cb(obj[key])));
  return obj;
};
// Like map for arrays, but for objects. Transform the value of each property in turn.
// http://underscorejs.org/#mapObject

const pairs = obj => Object.entries(obj);
// Convert an object into a list of [key, value] pairs.
// http://underscorejs.org/#pairs

const invert = obj => {
  const k = Object.keys(obj);
  const newObj = {};
  for (let i = 0; i < k.length; i++) {
    newObj[obj[k[i]]] = [k[i]];
  }
  return newObj;
};
// Solution Using forEach
// const arr = Object.keys(obj); // ['x', 'y', 'z']
// const newObj = {};

// arr.forEach(k => newObj[obj[k]] = k);
// return newObj;
// Returns a copy of the object where the keys have become the values and the values the keys.
// Assume that all of the object's values will be unique and string serializable.
// http://underscorejs.org/#invert

const defaults = (obj, defaultProps) => {
  const arr = Object.keys(defaultProps);
  arr.forEach(k => {
    if (!obj[k]) {
      obj[k] = defaultProps[k];
    }
  });
  return obj;
};
// Fill in undefined properties that match properties on the `defaultProps` parameter object.
// Return `obj`.
// http://underscorejs.org/#defaults

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
