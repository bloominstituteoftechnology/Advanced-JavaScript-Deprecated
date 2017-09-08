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
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const keyarr = Object.keys(obj);
  for (let i = 0; i < keyarr.length; i++) {
    obj[keyarr[i]] = cb(obj[keyarr[i]]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const keyarr = Object.keys(obj);
  const valarr = Object.values(obj);
  const results = [];
  for (let i = 0; i < valarr.length; i++) {
    results.push([keyarr[i], valarr[i]]);
  }
  return results;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const valarr = Object.values(obj);
  const keyarr = Object.keys(obj);
  const resultobj = {};
  for (let i = 0; i < keyarr.length; i++) {
    resultobj[valarr[i]] = keyarr[i];
  }
  return resultobj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const keyarr = Object.keys(defaultProps);
  const valarr = Object.values(defaultProps);
  for (let i = 0; i < keyarr.length; i++) {
    if (obj[keyarr[i]] === undefined) {
      obj[keyarr[i]] = valarr[i];
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
