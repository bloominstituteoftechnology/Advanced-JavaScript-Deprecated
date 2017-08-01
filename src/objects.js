// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars */

const keys = obj => Object.keys(obj);
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // return Object.value(obj);
  // Object.values is not a function type error?? unsure why this happened
  // According to stackoverflow--values is unsupported by many browsers
  // good to use _.map instead
  // http://underscorejs.org/#values
  return Object.keys(obj).map(key => obj[key]);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  // Object.mapObject is not a function
  // return Object.mapObject(obj, obj[key] => cb(obj[key]));
  // failed
  const newObject = {};
  keys(obj).forEach((key) => {
    newObject[key] = cb(obj[key]);
  });
  return newObject;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  // return Object.pairs(obj);
  // const pairsArray = [];
  // for (let i = 0; i < obj.length; i++) {
  //  pairsArray.push(keys[i], obj[keys[i]]);
  // }
  // return pairsArray;
  const pairsCopy = [];
  Object.keys(obj).forEach((key) => {
    pairsCopy.push([key, obj[key]]);
  });
  return pairsCopy;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const result = {};
  Object.keys(obj).forEach((key) => {
    result[obj[key]] = key;
  });
  return result;
  // for (let i = 0; i < obj.length; i++) {
  //  result[obj[keys[i]]] = keys[i];
  // }
  // forEach works but the for loop does not--not understanding why
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return;
    }
    obj[key] = defaultProps[key];
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
