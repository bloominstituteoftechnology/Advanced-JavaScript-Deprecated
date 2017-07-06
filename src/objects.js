// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = obj => Object.keys(obj);

const values = obj => Object.values(obj);

const mapObject = (obj, cb) => {
  const newObj = {};
  keys(obj).forEach(key => newObj[key] = cb(obj[key]));
  return newObj;
};

const pairs = (obj) => {
  const kvPairsArr = [];
  keys(obj).forEach((key) => {
    const kvPair = [];
    kvPair.push(key, obj[key]);
    kvPairsArr.push(kvPair);
  });
  return kvPairsArr;
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
