// import { stat } from 'fs';
import WinScreen from './screens/winScreen/winScreen';
import GameOverScreen from './screens/gameOverScreen/gameOverScreen';

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
      WinScreen.draw();
    } else if (this.playerHealthy <= 0) {
      GameOverScreen.draw();
    }
  }
}

let gameState = null;

export const setGameState = (state) => {
  gameState = state;
};

export const getGameState = () => gameState;
