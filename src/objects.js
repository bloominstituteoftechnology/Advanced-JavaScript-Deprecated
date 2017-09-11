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
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  // Get the values from the obj
  const arrValues = Object.values(obj);
  const arrKeys = Object.keys(obj);
  let newValue = '';
  // Loop thru the values
  for (let i = 0; i < arrValues.length; i++) {
    // send them each into the callback function to get new values
    newValue = cb(arrValues[i]);
    // add new values to the keys of the obj
    obj[arrKeys[i]] = newValue;
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.entries(obj);
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const arrKeys = Object.keys(obj);
  const arrValues = Object.values(obj);
  const newObj = {};
  for (let i = 0; i < arrValues.length; i++) {
    newObj[arrValues[i]] = arrKeys[i];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

  // get the keys for obj
  const arrKeys = Object.keys(obj);
  // get the entries for defaultProps
  const arrDefaultKeys = Object.keys(defaultProps);
  const arrDefaultValues = Object.values(defaultProps);
  // loop thru the keys for arrDefaultKeys and check to see if they are in arrKeys
  for (let i = 0; i < arrDefaultKeys.length; i++) {
    if (arrKeys.includes(arrDefaultKeys[i])) {
      // That's good. Move on to the next one
    } else {
      // Since it's not included, add it to obj as a new property and values
      obj[arrDefaultKeys[i]] = arrDefaultValues[i];
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
