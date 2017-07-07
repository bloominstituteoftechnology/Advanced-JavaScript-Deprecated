// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const arrays = require('./arrays.js');


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

  return arrays.map(keys(obj), key => obj[key]);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject

  const newObj = {};
  arrays.forEach(keys(obj), (key) => {
    newObj[key] = cb(obj[key]);
  });
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  return arrays.map(keys(obj), key => [key, obj[key]]);
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert

  const copy = {};
  arrays.forEach(keys(obj), key => copy[obj[key]] = key);
  return copy;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

  const props = keys(obj);
  arrays.forEach(keys(defaultProps), (key) => {
    if (props.indexOf(key) === -1) {
      obj[key] = defaultProps[key];
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
