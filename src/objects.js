// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
const arrayMethods = require('../src/arrays');

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys

  // not sure how to do this without just using an Object method
  return arrayMethods.reduce(Object.entries(obj), (array, [key, value]) => {
    array.push(key);
    return array;
  }, []);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return arrayMethods.reduce(Object.entries(obj), (array, [key, value]) => {
    array.push(value);
    return array;
  }, []);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newObj = {};
  for (let i = 0; i < keys(obj).length; i++) {
    newObj[keys(obj)[i]] = cb(values(obj)[i], keys(obj)[i]);
  }
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const list = [];
  mapObject(obj, (value, key) => {
    list.push([key, value]);
  });
  return list;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObj = {};
  mapObject(obj, (value, key) => {
    newObj[value] = key;
  });
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  mapObject(defaultProps, (value, key) => {
    if (!(key in obj)) {
      obj[key] = value;
    }
    return value;
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
