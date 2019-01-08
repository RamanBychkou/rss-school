import WinScreen from './screens/winScreen/winScreen';
import GameOverScreen from './screens/gameOverScreen/gameOverScreen';
import Score from './screens/score/score';

export class GameState {
  constructor() {
    this.playerName = '';
    this.monsterName = '';
    this.playerHealthy = 100;
    this.monsterHealthy = 100;
  }

  setPlayerName(name = '') {
    this.playerName = name;
  }

  setMonsterName(name = '') {
    this.monsterName = name;
  }

  update(state) {
    this.playerHealthy = state.player;
    this.monsterHealthy = state.monster;
    this.controlState();
  }

  controlState() {
    const currentScore = Score.score;
    if (this.monsterHealthy <= 0) {
      if (currentScore.hasOwnProperty(this.playerName) === true) {
        currentScore[this.playerName] += 1;
      } else {
        currentScore[this.playerName] = 1;
      }
      console.log(Score.score);
      WinScreen.draw(this.playerName);
    } else if (this.playerHealthy <= 0) {
      if (currentScore.hasOwnProperty(this.playerName) === false) {
        currentScore[this.playerName] = 0;
      }
      console.log(Score.score);
      GameOverScreen.draw();
    }
  }
}

let gameState = null;

export const setGameState = (state) => {
  gameState = state;
};

export const getGameState = () => gameState;
