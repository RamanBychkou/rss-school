import $ from 'jquery';

import template from './landing.template';
import './landing.scss';

class Landing {
  static draw() {
    $('main').remove();
    const contentEl = document.querySelector('#content');
    contentEl.insertAdjacentHTML('beforeend', template);
  }

  static empty() {
    $('#choosePlayerName').empty();
  }
}

export default Landing;
