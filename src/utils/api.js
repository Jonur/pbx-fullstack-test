/**
 * @function extractJSON
 * @description Abstracts the JSON parsing from the ResponseStream to a separate function
 * to simplify unit testing and keep the code DRY for future API additions
 * @param {Object} response
 */
const extractJSON = response => response.json();

/**
 * @function getProducts
 * @description Returns local server's product listings
 */
export const getProducts = () => fetch('/api/products')
  .then(extractJSON)
  .then(data => data);