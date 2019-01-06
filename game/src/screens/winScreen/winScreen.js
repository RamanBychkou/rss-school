import $ from 'jquery';

import template from './winScreen.template';
import './winScreen.scss';
import Battle from '../battle/battle';
import Monster from '../../components/monster/monster';
import { GameState, setGameState } from '../../game';
import Score from '../score/score';

class WinScreen {
  static draw(name) {
    $('main').remove();
    const contentEl = document.querySelector('#content');
    contentEl.insertAdjacentHTML('beforeend', template);
    $('#battle').remove();
    $('.js-start-game').on('click', () => {
      const gameState = new GameState();
      gameState.setPlayerName(name);
      const game = new Battle();
      Battle.gameState = gameState;
      const monster = new Monster();
      monster.createNameMonster();
      gameState.setMonsterName(monster.getMonsterName());
      Battle.draw(gameState);
    });
    $('#js-score').on('click', (e) => {
      e.preventDefault();
      WinScreen.empty();
      Score.draw();
    });
  }

  static empty() {
    $('#winScreen').empty();
  }
}

export default WinScreen;
