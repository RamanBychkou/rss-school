import $ from 'jquery';

import template from './cast.template';

class Cast {
  static draw() {
    const contentEl = document.querySelector('#demoModal .modal-body');
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
