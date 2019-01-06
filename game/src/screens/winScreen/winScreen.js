import $ from 'jquery';

import template from './winScreen.template';
import './winScreen.scss';
import Battle from '../battle/battle';
import { GameState, setGameState } from '../../game';

class WinScreen {
  static draw(name) {
    $('main').remove()
    const contentEl = document.querySelector('#content');
    contentEl.insertAdjacentHTML('beforeend', template);
    $('#battle').remove();
    $('.js-start-game').on('click', () => {
      const gameState = new GameState();
      gameState.setPlayerName(name);
      console.log(Battle)
      const game = new Battle();
      Battle.gameState = gameState;
      Battle.draw(gameState);
    });
  }

  static empty() {
    $('#winScreen').empty();
  }
}

export default WinScreen;
