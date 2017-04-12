// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars */

const keys = obj => Object.keys(obj);
// Retrieve all the names of the object's properties.
// Return the keys as strings in an array.
// Based on http://underscorejs.org/#keys


const values = obj => Object.values(obj);
// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values

const mapObject = (obj, cb) => { Object.keys(obj).forEach((key) => { obj[key] = cb(obj[key]); }); return obj; };
// { x : '5'}
// Like map for arrays, but for objects. Transform the value of each property in turn.
// http://underscorejs.org/#mapObject
// obj.mapObject(cb)
// Object.keys(obj).forEach(key => cb(obj[key]))


const pairs = (obj) => {
  const x = [];
  Object.keys(obj).forEach(key => x.push([key, obj[key]]));
  return x;
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

const invert = (obj) => {
  const x = {};
  Object.keys(obj).forEach((key) => { x[obj[key]] = key; });
  return x;
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  Object.keys(defaultProps).forEach((dKey) => {
    obj[dKey] = obj[dKey] || defaultProps[dKey];
  });
  return obj;
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
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
