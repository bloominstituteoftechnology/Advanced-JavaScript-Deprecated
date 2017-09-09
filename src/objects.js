// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = obj => Object.keys(obj);
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys

const values = obj => Object.values(obj);
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  for (let i = 0; i < keys(obj).length; i++) {
    obj[keys(obj)[i]] = cb(values(obj)[i]);
  }
  return obj;
};
const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const outArr = [];
  for (let i = 0; i < keys(obj).length; i++) {
    const subArr = [];
    subArr.push(keys(obj)[i], values(obj)[i]);
    outArr[i] = subArr;
  }
  return outArr;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObj = {};
  for (let i = 0; i < keys(obj).length; i++) {
    newObj[values(obj)[i]] = keys(obj)[i];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  for (let i = 0; i < keys(defaultProps).length; i++) {
    if (obj[keys(defaultProps)[i]] === undefined) {
      obj[keys(defaultProps)[i]] = values(defaultProps)[i];
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
