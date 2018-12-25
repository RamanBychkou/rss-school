// import { stat } from 'fs';

export class GameState {
  constructor() {
    this.playerName = '';
    this.playerHealthy = 100;
    this.monsterHealthy = 100;
  }

  setPlayerName(name = '') {
    this.playerName = name;
  }

  update(state) {
    this.playerHealthy = state.player;
    this.monsterHealthy = state.monster;
    this.controlState();
  }

  controlState() {
    if (this.monsterHealthy <= 0) {
      this.getWinScreen();
    } else if (this.playerHealthy <= 0) {
      this.getGameOverSreen();
    }
  }

  static getWinScreen() {
    console.log('win');
  }

  static getGameOverSreen() {
    console.log('gameover');
  }
}

let gameState = null;

export const setGameState = (state) => {
  gameState = state;
};

export const getGameState = () => gameState;
