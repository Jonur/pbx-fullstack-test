/**
 * @function getProducts
 * @description Returns local server's product listings
 */
export const getProducts = () => fetch('/api/products')
  .then(res => res.json())
  .then(data => data);