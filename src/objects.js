// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = obj => Object.keys(obj);
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys


const values = obj => Object.values(obj);
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values


const mapObject = (obj, cb) => {
  Object.keys(obj).forEach(key => (obj[key]) = cb(obj[key]));
  return obj;
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
};

const pairs = obj => Object.entries(obj);
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs


const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert

  // iterate through the keys;
  // store new key value pairs into object;
  // assign new object at a specific key value at index;
  // return

  const newObject = {};
  const k = Object.keys(obj);
  for (let i = 0; i < k.length; i++) {
    newObject[obj[k[i]]] = k[i];
  }
  return newObject;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defaultKeys = keys(defaultProps);
  for (let i = 0; i < defaultKeys.length; i++) {
    if (!obj[defaultKeys[i]]) {
      obj[defaultKeys[i]] = defaultProps[defaultKeys[i]];
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
