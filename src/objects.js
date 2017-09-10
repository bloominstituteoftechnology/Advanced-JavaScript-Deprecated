// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
const arrays = require('./arrays');

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return arrays.reduce(Object.entries(obj), (ret, [key, _]) => {
    return ret.concat(key);
  }, []);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return arrays.reduce(keys(obj), (ret, key) => {
    return ret.concat(obj[key]);
  }, []);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  return arrays.reduce(keys(obj), (ret, key) => {
    ret[key] = cb(obj[key]);
    return ret;
  }, {});
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return arrays.reduce(keys(obj), (ret, key) => {
    ret.push([key, obj[key]]);
    return ret;
  }, []);
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  return arrays.reduce(pairs(obj), (ret, [key, value]) => {
    ret[value] = key;
    return ret;
  }, {});
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  return arrays.reduce(keys(defaultProps), (ret, key) => {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = defaultProps[key];
    }
    return ret;
  }, obj);
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
