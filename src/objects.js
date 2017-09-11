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
  // commented out to try for...in
  // const kys = keys(obj);
  const vals = [];
  const objkeys = Object.keys(obj);
  for (let i = 0; i < objkeys.length; i++) {
    vals.push(obj[objkeys[i]]);
  }
  return vals;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const trans = {};
  const objkeys = Object.keys(obj);
  for (let i = 0; i < objkeys.length; i++) {
    trans[objkeys[i]] = cb(obj[objkeys[i]]);
  }
  return trans;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const pair = [];
  const objkeys = Object.keys(obj);
  for (let i = 0; i < objkeys.length; i++) {
    pair.push([objkeys[i], obj[objkeys[i]]]);
  }
  return pair;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const rev = {};
  const objkeys = Object.keys(obj);
  for (let i = 0; i < objkeys.length; i++) {
    rev[obj[objkeys[i]]] = objkeys[i];
  }
  return rev;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const filled = obj;
  const defKeys = Object.keys(defaultProps);
  for (let i = 0; i < defKeys.length; i++) {
    filled[defKeys[i]] = filled[defKeys[i]] || defaultProps[defKeys[i]];
  }
  return filled;
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
