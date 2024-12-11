'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line)
    .join(' ')
    .split(';')
    .forEach((declaration) => {
      const [key, value] = declaration.split(/:(.+)/);

      if (key && value) {
        styles[key.trim()] = value.trim();
      }
    });

  return styles;
}

module.exports = convertToObject;
