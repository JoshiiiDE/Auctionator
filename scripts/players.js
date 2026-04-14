'use strict';

// ===================== PLAYER CLASS =====================

class Player {
  constructor(id, name) {
    this.id         = id;
    this.name       = name;
    this.money      = 0; // set at game start based on round count
    this.characters = [];
    this.score      = 0;
  }
}
