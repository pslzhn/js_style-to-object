'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((line) => line.trim())
    .map((line) => line.split(/:(.+)/).map((part) => part.trim()))
    .reduce((styles, [key, value]) => {
      if (key && value) {
        styles[key] = value;
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
