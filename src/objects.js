// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars */

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
  const vals = [];
  const keyArr = Object.keys(obj);
  keyArr.forEach((key) => {
    vals.push(obj[key]);
  });
  return vals;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const keyArr = Object.keys(obj);
  const mappedObj = {};
  keyArr.forEach((key) => {
    mappedObj[key] = cb(obj[key]);
  });
  return mappedObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const keyArr = keys(obj);
  const valArr = values(obj);
  const pairArr = [];
  for (let i = 0; i < keyArr.length; i++) {
    const tempArr = [];
    tempArr.push(keyArr[i], valArr[i]);
    pairArr.push(tempArr);
  }
  return pairArr;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const keyArr = keys(obj);
  const valArr = values(obj);
  const invertedObj = {};
  for (let i = 0; i < keyArr.length; i++) {
    invertedObj[valArr[i]] = keyArr[i];
  }
  return invertedObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const keyArr = keys(obj);
  const defKeys = keys(defaultProps);
  defKeys.forEach((key) => {
    if (!keyArr.includes(key)) {
      obj[key] = defaultProps[key];
    }
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
  defaults,
};
