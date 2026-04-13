'use strict';

// ===================== PLAYER CLASS =====================

class Player {
  constructor(id, name) {
    this.id         = id;
    this.name       = name;
    this.money      = 1_000_000_000;
    this.characters = [];
    this.score      = 0;
  }
}
