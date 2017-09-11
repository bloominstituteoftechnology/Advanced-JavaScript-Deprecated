// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  return Object.keys(obj);
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
};
const names = { name: 'time', place: 'weather' };
// console.log(keys(names));

const values = (obj) => {
  return Object.keys(obj).map((value) => {
    return value = obj[value];
  });
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
};
// console.log(values(names));

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const keyArr = Object.keys(obj);
  const valueArr = Object.keys(obj).map((value) => {
    return value = cb(obj[value]);
  });
  for (let i = 0; i < valueArr.length; i++) obj[keyArr[i]] = valueArr[i];
  return obj;
};
// console.log(mapObject(names, values));

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const arr1 = Object.keys(obj).map((value) => {
    return value = obj[value];
  });
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    const arr4 = [];
    arr4.push(Object.keys(obj)[i]);
    arr4.push(arr1[i]);
    arr3.push(arr4);
  }
  return arr3;
};
const homes = { name: 'victorian', place: 'weather' };
// console.log(pairs(homes));

const invert = (obj) => {
  const obj2 = {};
  Object.keys(obj).map((value) => {
    return obj2[obj[value]] = value;
  });
  // console.log(obj2);
  return obj2;
    // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};
const friends = { name: 'tim' };
// console.log(invert(friends));
const filled = { name: 'south' };
const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((x) => {
    if (obj[x] === undefined) obj[x] = defaultProps[x];
  });
  return obj;
};
// console.log(defaults(filled, friends));

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
