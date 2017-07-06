// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const fns = require('./arrays.js');

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

  const props = keys(obj);
  const vals = [];

  for (let i = 0; i < props.length; i++) {
    const val = obj[props[i]];
    if (typeof val !== 'function') {
      vals.push(val);
    }
  }

  return vals;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject

  const props = keys(obj);
  const newObj = {};

  for (let i = 0; i < props.length; i++) {
    newObj[props[i]] = cb(obj[props[i]]);
  }

  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  const props = keys(obj);
  const list = [];

  for (let i = 0; i < props.length; i++) {
    list.push([props[i], obj[props[i]]]);
  }

  return list;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert

  const props = keys(obj);
  const copy = {};

  for (let i = 0; i < props.length; i++) {
    copy[obj[props[i]]] = props[i];
  }

  return copy;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

  const defaultKeys = keys(defaultProps);
  const props = keys(obj);

  for (let i = 0; i < defaultKeys.length; i++) {
    const defKey = defaultKeys[i];
    if (props.indexOf(defKey) === -1) {
      obj[defKey] = defaultProps[defKey];
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
