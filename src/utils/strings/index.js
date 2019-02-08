/**
 * Capitalize the first letter of a string.
 * @param   {string} str  "bulbasaur", "charmander"
 * @returns {string}      "Bulbasaur", "Charmander"
 */
export const capitalizeFirstLetter = str => str && (
  str === ''
    ? ''
    : str.charAt(0).toUpperCase() + str.slice(1)
);
