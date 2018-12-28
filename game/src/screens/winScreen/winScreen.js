import $ from 'jquery';

import template from './winScreen.template';

class WinScreen {
  static draw() {
    const contentEl = document.querySelector('.starter-template');
    contentEl.insertAdjacentHTML('beforeend', template);
    $('#battle').remove();
  }

  static empty() {
    $('#winScreen').empty();
  }
}

export default WinScreen;
