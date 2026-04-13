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

  entries.forEach((entry, i) => {
    const points    = playerCount - i;
    entry.rank      = i + 1;
    entry.points    = points;
    entry.player.score += points;
  });

  return entries;
}
