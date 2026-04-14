'use strict';

// ===================== SCORING =====================

/**
 * Rank this round's winners by their character's stat in the current category.
 * Award points top-down: 1st place = playerCount pts, last place = 1 pt.
 * Players who did not win a character score 0 for the round.
 *
 * Mutates player.score directly.
 *
 * @returns {object[]} Sorted array of { rank, player, character, stat, points }
 */
function calculateRoundScores() {
  const cat         = state.currentCategory.toLowerCase();
  const playerCount = state.players.length;

  const entries = auction.results
    .filter(r => r.winner !== null)
    .map(r => ({
      player:    r.winner,
      character: r.character,
      stat:      r.character.rankings[cat],
    }));

  // Highest stat wins
  entries.sort((a, b) => b.stat - a.stat);

  // Assign same rank and points to tied entries; next group skips past the tied positions
  let i = 0;
  while (i < entries.length) {
    const rank   = i + 1;
    const points = playerCount - i;
    let j = i;
    while (j < entries.length && entries[j].stat === entries[i].stat) {
      entries[j].rank    = rank;
      entries[j].points  = points;
      entries[j].player.score += points;
      j++;
    }
    i = j;
  }

  return entries;
}
