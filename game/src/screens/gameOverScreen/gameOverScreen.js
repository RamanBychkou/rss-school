import $ from 'jquery';

import template from './gameOverScreen.template';
import './gameOverScreen.scss';

class GameOverScreen {
  static draw() {
    $('main').remove();
    const contentEl = document.querySelector('#content');
    contentEl.insertAdjacentHTML('beforeend', template);
    $('#battle').remove();
  }

  static empty() {
    $('#winScreen').empty();
  }
}

export default GameOverScreen;
