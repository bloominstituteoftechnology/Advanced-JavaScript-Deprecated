// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

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
  const k = keys(obj);
  const arr = [];
  for (let i = 0; i < k.length; i++) {
    arr.push(obj[k[i]]);
  }
  return arr;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const k = keys(obj);
  const v = values(obj);
  for (let i = 0; i < k.length; i++) {
    obj[k[i]] = cb(v[i]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const arr = [];
  const k = keys(obj);
  const v = values(obj);
  for (let i = 0; i < k.length; i++) {
    arr.push([k[i], v[i]]);
  }
  return arr;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const copy = {};
  const k = keys(obj);
  const v = values(obj);
  for (let i = 0; i < k.length; i++) {
    copy[v[i]] = k[i];
  }
  return copy;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const keyObj = keys(obj);
  const keyDefault = keys(defaultProps);
  const valueDefault = values(defaultProps);
  for (let i = 0; i < keyDefault.length; i++) {
    if (keyObj.indexOf(keyDefault[i]) === -1) {
      obj[keyDefault[i]] = valueDefault[i];
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
