import { cache } from 'react';

const getStocks = cache(async () => {
  const res = await fetch('http://localhost:3900/stock-inventories');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
});

module.exports = {
  getStocks
};