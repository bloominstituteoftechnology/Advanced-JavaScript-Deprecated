// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys

  return Object.getOwnPropertyNames(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values

  const objValues = [];
  const objKeys = keys(obj);

  for (let i = 0; i < objKeys.length; i++) {
    if (typeof obj[objKeys[i]] !== 'function') {
      objValues.push(obj[objKeys[i]]);
    }
  }
  return objValues;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject

  const object = {};
  const key = keys(obj);
  const value = values(obj);

  for (let i = 0; i < key.length; i++) {
    object[key[i]] = cb(value[i]);
  }
  return object;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  const pairsArray = [];
  const key = keys(obj);
  const value = values(obj);

  for (let i = 0; i < key.length; i++) {
    pairsArray.push([key[i], value[i]]);
  }
  return pairsArray;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert

  const object = {};
  const key = keys(obj);
  const value = values(obj);

  for (let i = 0; i < key.length; i++) {
    object[value[i]] = key[i];
  }
  return object;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

  const key = keys(defaultProps);
  const value = values(defaultProps);

  for (let i = 0; i < key.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(obj, key[i])) {
      obj[key[i]] = value[i];
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
