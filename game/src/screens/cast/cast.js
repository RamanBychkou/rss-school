import $ from 'jquery';

import template from './cast.template';

class Cast {
  static draw() {
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.innerHTML = template;

    $('#demoModal').modal({});
  }

  static empty() {
    $('#cast').empty();
  }

  static getPlayerCast() {
    Cast.draw();
  }
}

export default Cast;
