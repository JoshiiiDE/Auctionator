'use strict';

// ===================== ROUND CONFIG =====================

let TOTAL_ROUNDS = 6;

const CATEGORIES = [
  'Speed',
  'Strength',
  'Intelligence',
  'Combat',
  'Power',
  'Durability',
];

// ===================== CATEGORY SELECTION =====================

/**
 * Pick a random category, guaranteed to differ from the last one used.
 * @param {string|null} lastCategory - The category used in the previous round.
 * @returns {string} The selected category.
 */
function pickCategory(lastCategory) {
  const pool = lastCategory
    ? CATEGORIES.filter(c => c !== lastCategory)
    : CATEGORIES;

  return pool[Math.floor(Math.random() * pool.length)];
}
