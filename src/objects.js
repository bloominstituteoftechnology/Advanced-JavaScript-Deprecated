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
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  Object.keys(obj).forEach(key => (obj[key]) = cb(obj[key]));
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
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
  defaults
};
