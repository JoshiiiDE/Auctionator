'use strict';

// ===================== AUCTION STATE =====================

const auction = {
  queue:            [],   // characters to be auctioned this round
  index:            0,    // position in the queue
  winners:          new Set(), // player IDs who have already won a character this round
  currentCharacter: null,
  currentBid:       0,
  highestBidder:    null,
  selectedBidder:   null, // player currently selected to place a bid
  results:          [],   // { character, winner, bid } per completed auction
  roundScores:      [],   // { rank, player, character, stat, points } — filled after round ends
  statRevealed:     false,
};

// ===================== AUCTION FLOW =====================

function startAuction() {
  auction.queue            = [...state.currentCharacters];
  auction.index            = 0;
  auction.winners          = new Set();
  auction.results          = [];
  auction.roundScores      = [];
  auction.selectedBidder   = null;

  showCharacter(auction.queue[0]);
  showScreen('auction-screen');
}

/**
 * Display a character and reset bid state for a fresh auction.
 * @param {object} character
 */
function showCharacter(character) {
  auction.currentCharacter = character;
  auction.currentBid       = 0;
  auction.highestBidder    = null;
  auction.selectedBidder   = null;
  auction.statRevealed     = false;

  renderAuctionScreen();
}

/**
 * Mark a player as the active bidder for the current round of bids.
 * Ignored if the player has already won a character this round.
 * @param {number} playerId
 */
function selectBidder(playerId) {
  const player = state.players.find(p => p.id === playerId);
  if (!player)                        return;
  if (auction.winners.has(playerId))  return;
  if (player.money <= auction.currentBid) return;

  auction.selectedBidder = player;
  renderBidderPanel();
  renderBidInput();
}

/**
 * Read the bid amount from the input and submit it for the selected bidder.
 */
function placeBid() {
  const input  = document.getElementById('bid-input');
  const amount = parseInt(input.value.replace(/\./g, ''), 10);
  const player = auction.selectedBidder;

  if (!player) return;

  if (isNaN(amount) || amount <= auction.currentBid) {
    alert(`Bid must be higher than the current bid ($${auction.currentBid.toLocaleString()}).`);
    return;
  }
  if (amount > player.money) {
    alert(`${player.name} only has $${player.money.toLocaleString()}.`);
    return;
  }

  input.value = '';
  updateHighestBid(player, amount);
}

/**
 * Record a new highest bid and refresh the UI.
 * @param {Player} player
 * @param {number} amount
 */
function updateHighestBid(player, amount) {
  auction.currentBid     = amount;
  auction.highestBidder  = player;
  auction.selectedBidder = null;

  renderBidStatus();
  renderBidderPanel();
  renderBidInput();
}

/**
 * Close bidding on the current character.
 * If there is a highest bidder, assign the character to them.
 * Then move to the next character or end the round.
 */
function endAuction() {
  if (!auction.statRevealed) {
    auction.statRevealed = true;
    const cat = state.currentCategory;
    const ch  = auction.currentCharacter;
    document.getElementById('auction-char-stat').textContent =
      `${cat}:  ${ch.rankings[cat.toLowerCase()]}`;
    document.getElementById('btn-end-auction').textContent = 'Continue';
    document.getElementById('btn-place-bid').disabled      = true;
    document.getElementById('bid-input').disabled          = true;
    document.getElementById('bidding-as').textContent      = '';
    document.getElementById('bidder-buttons').querySelectorAll('button').forEach(b => b.disabled = true);
    return;
  }

  if (auction.highestBidder) {
    assignCharacter(auction.highestBidder, auction.currentCharacter, auction.currentBid);
  }

  auction.results.push({
    character: auction.currentCharacter,
    winner:    auction.highestBidder,
    bid:       auction.currentBid,
  });

  nextAuction();
}

/**
 * Deduct money and award the character to the winning player.
 * @param {Player} player
 * @param {object} character
 * @param {number} bid
 */
function assignCharacter(player, character, bid) {
  player.money -= bid;
  player.characters.push(character);
  auction.winners.add(player.id);
}

/**
 * Advance to the next character in the queue, or end the round.
 */
function nextAuction() {
  auction.index++;

  if (auction.index < auction.queue.length) {
    showCharacter(auction.queue[auction.index]);
  } else {
    auction.roundScores = calculateRoundScores();
    renderRoundResults();
    showScreen('reveal-screen');
  }
}
