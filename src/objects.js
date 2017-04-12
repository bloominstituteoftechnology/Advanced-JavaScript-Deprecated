// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars */

const keys = obj => Object.keys(obj);
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys

const values = obj => Object.keys(obj).map(key => obj[key]);
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values

// const mapObject = (obj, cb) => Object.keys(obj).map(key => { cb(obj[key]) });
const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const copy = {};
  const items = keys(obj);

  for (let i = 0, len = items.length; i < len; i++) {
    copy[items[i]] = cb(obj[items[i]]);
  }
  return copy;
};

const pairs = obj => Object.keys(obj).map(key => [key, obj[key]]);
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const copy = {};
  const arr = pairs(obj);

  for (let i = 0, len = arr.length; i < len; i++) {
    copy[arr[i][1]] = arr[i][0];
  }
  return copy;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const objKeys = pairs(obj);
  const defKeys = pairs(defaultProps);

  for (let i = 0, len = defKeys.length; i < len; i++) {
    const key = defKeys[i][0];
    const val = defKeys[i][1];

    if (!obj[key]) obj[key] = val;
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
  defaults,
};
