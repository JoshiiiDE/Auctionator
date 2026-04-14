'use strict';

// ===================== CONSTANTS =====================

const MIN_PLAYERS       = 2;
const MIN_ROUNDS        = 1;
const MAX_ROUNDS        = 10;
const MONEY_PER_ROUND   = 100_000_000;
let nextPlayerId        = 1;

// ===================== STATE =====================

const state = {
  players: [],           // Player instances
  round: 1,
  currentCategory:   null,
  currentCharacters: [], // Characters available this round
};

// ===================== SCREEN MANAGEMENT =====================

/**
 * Show a single screen by its ID, hide all others.
 * @param {string} screenId - The ID of the screen to show.
 */
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');
}

// ===================== OVERVIEW SCREEN =====================

function openOverview() {
  const grid = document.getElementById('overview-grid');
  grid.innerHTML = '';

  const sorted = [...CHARACTERS].sort((a, b) => a.name.localeCompare(b.name));

  sorted.forEach(ch => {
    const card = document.createElement('div');
    card.className = 'overview-card';

    const statsHtml = Object.entries(ch.rankings).map(([stat, value]) => `
      <div class="overview-stat-row">
        <span class="overview-stat-label">${stat}</span>
        <span class="overview-stat-value">${value}</span>
      </div>
    `).join('');

    card.innerHTML = `
      <img src="${ch.image}" alt="${ch.name}" />
      <div class="overview-card-name">${ch.name}</div>
      <div class="overview-stats">${statsHtml}</div>
    `;

    grid.appendChild(card);
  });

  showScreen('overview-screen');
}

// ===================== LOBBY =====================

function addPlayer() {
  // no max player limit

  const input = document.getElementById('player-name-input');
  const name  = input.value.trim();
  if (!name) return;

  state.players.push(new Player(nextPlayerId++, name));
  input.value = '';
  renderPlayerList();
}

function removePlayer(id) {
  state.players = state.players.filter(p => p.id !== id);
  renderPlayerList();
}

function renderPlayerList() {
  const list  = document.getElementById('player-list');
  const count = state.players.length;

  list.innerHTML = '';

  state.players.forEach((player, index) => {
    const entry = document.createElement('div');
    entry.className = 'player-entry';
    entry.innerHTML = `
      <span class="player-entry-number">${index + 1}.</span>
      <span class="player-entry-name">${player.name}</span>
      <button class="btn-remove-player" data-id="${player.id}">Remove</button>
    `;
    list.appendChild(entry);
  });

  // Player count indicator
  document.getElementById('lobby-player-count').textContent =
    `${count} players`;

  // Disable add button at max
  document.getElementById('btn-add-player').disabled = false;

  // Show/hide start button hint
  const startBtn = document.getElementById('btn-start-game');
  startBtn.disabled = count < MIN_PLAYERS;
  document.getElementById('lobby-status').textContent =
    count < MIN_PLAYERS
      ? `Need at least ${MIN_PLAYERS} players to start (${MIN_PLAYERS - count} more needed)`
      : 'Ready to start!';
}

function updateRoundSelector() {
  document.getElementById('rounds-display').textContent = TOTAL_ROUNDS;
  document.getElementById('btn-rounds-minus').disabled  = TOTAL_ROUNDS <= MIN_ROUNDS;
  document.getElementById('btn-rounds-plus').disabled   = TOTAL_ROUNDS >= MAX_ROUNDS;
  const budget = (TOTAL_ROUNDS * MONEY_PER_ROUND).toLocaleString('de-DE');
  document.getElementById('starting-money-label').textContent = `Starting budget: $${budget}`;
}

function startGame() {
  if (state.players.length < MIN_PLAYERS) {
    alert(`At least ${MIN_PLAYERS} players are required to start.`);
    return;
  }
  const startingMoney = TOTAL_ROUNDS * MONEY_PER_ROUND;
  state.players.forEach(p => { p.money = startingMoney; });
  state.round = 1;
  state.currentCategory   = pickCategory(null);
  state.currentCharacters = pickRoundCharacters(state.players.length);
  renderGameScreen();
  showScreen('game-screen');
}

// ===================== GAME SCREEN =====================

function renderGameScreen() {
  document.getElementById('round-number').textContent = `${state.round} / ${TOTAL_ROUNDS}`;
  document.getElementById('round-category').textContent = state.currentCategory;

  // Players overview
  const overview = document.getElementById('players-overview');
  overview.innerHTML = '';
  state.players.forEach(player => {
    const card = document.createElement('div');
    card.textContent = `${player.name} — $${player.money.toLocaleString()}`;
    overview.appendChild(card);
  });

}

// ===================== REVEAL SCREEN =====================

function nextRound() {
  if (state.round >= TOTAL_ROUNDS) {
    renderEndgame();
    showScreen('endgame-screen');
    return;
  }
  state.currentCategory   = pickCategory(state.currentCategory);
  state.currentCharacters = pickRoundCharacters(state.players.length);
  state.round++;
  renderGameScreen();
  showScreen('game-screen');
}

function viewScores() {
  renderScoreboard();
  showScreen('scoreboard');
}

// ===================== SCOREBOARD =====================

function renderScoreboard() {
  const list = document.getElementById('score-list');
  list.innerHTML = '';

  const sorted = [...state.players].sort((a, b) => b.score - a.score || b.money - a.money);

  sorted.forEach((player, index) => {
    const entry = document.createElement('div');
    const chars = player.characters.map(c => c.name).join(', ') || 'none';
    entry.textContent = `${index + 1}. ${player.name} — $${player.money.toLocaleString()} — Score: ${player.score} — Characters: ${chars}`;
    list.appendChild(entry);
  });
}

function backToGame() {
  renderGameScreen();
  showScreen('game-screen');
}

// ===================== ENDGAME =====================

const PLACE_LABELS = ['1st', '2nd', '3rd', '4th', '5th', '6th'];

function renderEndgame() {
  const sorted = [...state.players].sort((a, b) => b.score - a.score || b.money - a.money);

  // Podium: order is 2nd, 1st, 3rd (left, center, right)
  const podiumOrder = [
    { index: 1, cls: 'second', label: '2' },
    { index: 0, cls: 'first',  label: '1' },
    { index: 2, cls: 'third',  label: '3' },
  ];

  const podium = document.getElementById('podium');
  podium.innerHTML = '';

  podiumOrder.forEach(({ index, cls, label }) => {
    const player = sorted[index];
    if (!player) return;

    const slot = document.createElement('div');
    slot.className = `podium-slot ${cls}`;
    slot.innerHTML = `
      <div class="podium-player-name">${player.name}</div>
      <div class="podium-player-score">${player.score} pts</div>
      <div class="podium-block">${label}</div>
    `;
    podium.appendChild(slot);
  });

  const list = document.getElementById('endgame-rankings');
  list.innerHTML = '';

  sorted.forEach((player, i) => {
    const row = document.createElement('div');
    row.className = i === 0 ? 'endgame-rank-row first-place' : 'endgame-rank-row';
    row.innerHTML = `
      <span class="er-place">${PLACE_LABELS[i] ?? (i + 1) + 'th'}</span>
      <span class="er-name">${player.name}</span>
      <span class="er-score">${player.score} pts</span>
      <span class="er-money">$${player.money.toLocaleString()}</span>
    `;
    list.appendChild(row);
  });
}

/**
 * Reset all player stats and restart with the same roster.
 */
function playAgain() {
  const startingMoney = TOTAL_ROUNDS * MONEY_PER_ROUND;
  state.players.forEach(player => {
    player.money      = startingMoney;
    player.characters = [];
    player.score      = 0;
  });

  state.round             = 1;
  state.currentCategory   = pickCategory(null);
  state.currentCharacters = pickRoundCharacters(state.players.length);

  renderGameScreen();
  showScreen('game-screen');
}

function newGame() {
  state.players           = [];
  state.round             = 1;
  state.currentCategory   = null;
  state.currentCharacters = [];
  nextPlayerId = 1;

  renderPlayerList();
  showScreen('lobby-screen');
}

// ===================== EVENT LISTENERS =====================

document.addEventListener('DOMContentLoaded', () => {
  // Overview
  document.getElementById('btn-open-overview').addEventListener('click', openOverview);
  document.getElementById('btn-close-overview').addEventListener('click', () => showScreen('lobby-screen'));

  // Lobby — round selector
  updateRoundSelector();
  document.getElementById('btn-rounds-minus').addEventListener('click', () => {
    if (TOTAL_ROUNDS > MIN_ROUNDS) { TOTAL_ROUNDS--; updateRoundSelector(); }
  });
  document.getElementById('btn-rounds-plus').addEventListener('click', () => {
    if (TOTAL_ROUNDS < MAX_ROUNDS) { TOTAL_ROUNDS++; updateRoundSelector(); }
  });

  // Lobby — players
  document.getElementById('btn-add-player').addEventListener('click', addPlayer);
  document.getElementById('btn-start-game').addEventListener('click', startGame);
  document.getElementById('player-name-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') addPlayer();
  });

  // Remove player via event delegation on the list container
  document.getElementById('player-list').addEventListener('click', e => {
    const btn = e.target.closest('.btn-remove-player');
    if (btn) removePlayer(Number(btn.dataset.id));
  });

  // Game screen
  document.getElementById('btn-start-auction').addEventListener('click', startAuction);

  // Auction screen — bidder selection via event delegation
  document.getElementById('bidder-buttons').addEventListener('click', e => {
    const btn = e.target.closest('.bidder-btn');
    if (btn) selectBidder(Number(btn.dataset.playerId));
  });
  document.getElementById('btn-place-bid').addEventListener('click', placeBid);

  const bidInput = document.getElementById('bid-input');
  bidInput.addEventListener('input', () => {
    const digits = bidInput.value.replace(/\D/g, '');
    bidInput.value = digits ? Number(digits).toLocaleString('de-DE') : '';
  });
  bidInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') placeBid();
  });

  document.getElementById('btn-end-auction').addEventListener('click', endAuction);

  // Reveal screen
  document.getElementById('btn-next-round').addEventListener('click', nextRound);
  document.getElementById('btn-view-scores').addEventListener('click', viewScores);

  // Scoreboard
  document.getElementById('btn-back-to-game').addEventListener('click', backToGame);
  document.getElementById('btn-new-game').addEventListener('click', newGame);

  // Endgame
  document.getElementById('btn-play-again').addEventListener('click', playAgain);
  document.getElementById('btn-endgame-new-game').addEventListener('click', newGame);

  // Start on lobby
  showScreen('lobby-screen');
});
