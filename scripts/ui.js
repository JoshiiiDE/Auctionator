'use strict';

// ===================== AUCTION SCREEN =====================

/**
 * Full render of the auction screen for the current character.
 */
function renderAuctionScreen() {
  const ch      = auction.currentCharacter;
  const current = auction.index + 1;
  const total   = auction.queue.length;
  const cat     = state.currentCategory;

  document.getElementById('auction-progress').textContent      = `Character ${current} of ${total}`;
  document.getElementById('auction-category-label').textContent = cat;
  document.getElementById('auction-char-img').src               = ch.image;
  document.getElementById('auction-char-img').alt               = ch.name;
  document.getElementById('auction-char-name').textContent      = ch.name;
  document.getElementById('auction-char-stat').textContent      =
    `${cat}:  ???`;

  renderBidStatus();
  renderBidderPanel();
  renderBidInput();
}

/**
 * Update the current-bid and highest-bidder displays.
 * Also updates the end-auction button label to reflect auction state.
 */
function renderBidStatus() {
  document.getElementById('current-bid').textContent =
    auction.currentBid > 0
      ? `$${auction.currentBid.toLocaleString()}`
      : 'No bids yet';

  document.getElementById('highest-bidder').textContent =
    auction.highestBidder ? auction.highestBidder.name : '—';

  document.getElementById('btn-end-auction').textContent =
    auction.highestBidder ? 'Sold!' : 'No Sale';
}

/**
 * Render one button per player. States:
 *   - .won      — player already won a character this round (disabled)
 *   - .leading  — player is current highest bidder
 *   - .selected — player is selected to place the next bid
 *   - disabled  — player cannot afford to outbid the current bid
 */
function renderBidderPanel() {
  const container = document.getElementById('bidder-buttons');
  container.innerHTML = '';

  state.players.forEach(player => {
    const hasWon     = auction.winners.has(player.id);
    const isSelected = auction.selectedBidder?.id === player.id;
    const isLeading  = auction.highestBidder?.id  === player.id;
    const cantAfford = player.money <= auction.currentBid;
    const isDisabled = hasWon || cantAfford;

    const btn = document.createElement('button');
    btn.className        = 'bidder-btn';
    btn.dataset.playerId = player.id;
    btn.disabled         = isDisabled;

    if (isSelected) btn.classList.add('selected');
    if (isLeading)  btn.classList.add('leading');
    if (hasWon)     btn.classList.add('won');

    const statusLabel = hasWon     ? '<span class="bidder-status">✓ Won</span>'
                      : isLeading  ? '<span class="bidder-status">↑ Leading</span>'
                      : '';

    btn.innerHTML = `
      <span class="bidder-name">${player.name}</span>
      <span class="bidder-money">$${player.money.toLocaleString()}</span>
      ${statusLabel}
    `;

    container.appendChild(btn);
  });
}

/**
 * Update the bid input area to reflect the currently selected bidder.
 */
function renderBidInput() {
  const input     = document.getElementById('bid-input');
  const placeBtn  = document.getElementById('btn-place-bid');
  const biddingAs = document.getElementById('bidding-as');

  if (auction.selectedBidder) {
    biddingAs.textContent = `Bidding as: ${auction.selectedBidder.name}`;
    input.disabled        = false;
    placeBtn.disabled     = false;
  } else {
    biddingAs.textContent = 'Select a player above to bid';
    input.value           = '';
    input.disabled        = true;
    placeBtn.disabled     = true;
  }
}

// ===================== REVEAL SCREEN =====================

const RANK_LABELS = ['1st', '2nd', '3rd', '4th', '5th', '6th'];

/**
 * Render the full reveal screen:
 *   1. Auction summary  — who bought what for how much
 *   2. Round scoring    — ranking by category stat with points earned
 *   3. Leaderboard      — cumulative scores across all rounds so far
 */
function renderRoundResults() {
  document.getElementById('reveal-category').textContent = state.currentCategory;

  const isLastRound = state.round >= TOTAL_ROUNDS;
  document.getElementById('btn-next-round').textContent =
    isLastRound ? 'See Final Results' : 'Next Round';
  document.getElementById('btn-view-scores').style.display =
    isLastRound ? 'none' : '';

  renderAuctionSummary();
  renderRoundScoring();
  renderLeaderboard();
}

function renderAuctionSummary() {
  const container = document.getElementById('round-results');
  container.innerHTML = '';

  auction.results.forEach(result => {
    const row = document.createElement('div');
    row.className = 'result-row';

    const winnerText = result.winner
      ? `${result.winner.name} — $${result.bid.toLocaleString()}`
      : 'No Sale';

    row.innerHTML = `
      <img  src="${result.character.image}"
            alt="${result.character.name}"
            class="result-char-img" />
      <span class="result-char-name">${result.character.name}</span>
      <span class="result-arrow">→</span>
      <span class="result-winner ${result.winner ? '' : 'no-sale'}">${winnerText}</span>
    `;

    container.appendChild(row);
  });
}

function renderRoundScoring() {
  const container = document.getElementById('round-scoring');
  container.innerHTML = '';

  if (auction.roundScores.length === 0) {
    container.innerHTML = '<p class="no-scores">No characters were sold this round.</p>';
    return;
  }

  const cat = state.currentCategory;

  auction.roundScores.forEach(entry => {
    const row = document.createElement('div');
    row.className = 'score-row';
    row.innerHTML = `
      <span class="score-rank">${RANK_LABELS[entry.rank - 1] ?? entry.rank + 'th'}</span>
      <span class="score-player">${entry.player.name}</span>
      <span class="score-character">${entry.character.name}</span>
      <span class="score-stat">${cat} ${entry.stat}</span>
      <span class="score-points">+${entry.points} pts</span>
    `;
    container.appendChild(row);
  });
}

function renderLeaderboard() {
  const container = document.getElementById('round-leaderboard');
  container.innerHTML = '';

  const sorted = [...state.players].sort((a, b) => b.score - a.score || b.money - a.money);

  sorted.forEach((player, i) => {
    const row = document.createElement('div');
    row.className = 'leaderboard-row';
    row.innerHTML = `
      <span class="lb-rank">${RANK_LABELS[i] ?? (i + 1) + 'th'}</span>
      <span class="lb-name">${player.name}</span>
      <span class="lb-score">${player.score} pts</span>
      <span class="lb-money">$${player.money.toLocaleString()}</span>
    `;
    container.appendChild(row);
  });
}
