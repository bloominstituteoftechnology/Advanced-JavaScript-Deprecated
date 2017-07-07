// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars */

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const strings = [];
  Object.keys(obj).forEach((key) => {
    strings.push(key);
  });
  return strings;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
//   const strings = [];
//   Object.values(obj).forEach((value) => {
//     return value;
//   });
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  Object.keys(obj).forEach(key => (obj[key] = cb(obj[key])));
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  // k: the passed object's keys
  // length: the number of keys
  // pair: the array that will hold the pairs;
  // while i is less than the number of keys
  // pair's i = key, value
  // keys already declare in upper scope > k
  const k = Object.keys(obj);
  const length = k.length;
  const pair = [];
  for (let i = 0; i < length; i++) {
    pair[i] = [k[i], obj[k[i]]];
  }
  return pair;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObj = {};
  const keyList = Object.keys(obj);
  const length = keyList.length;
  for (let i = 0; i < length; i++) {
    newObj[obj[keyList[i]]] = keyList[i];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  // two objects, obj with empty props matching props in defaultProps
  // insert values from defaultProps into obj to complete and return it
  // Object.keys(obj).forEach((key) => {
  //   if (obj[key] === null || obj[key].length < 1) {
  //     obj[key] = defaultProps[key];
  //   }
  // });
  // return obj;
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key].length === 0) {
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
  defaults
};
