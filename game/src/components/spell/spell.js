import $ from 'jquery';
import template from './spell.template';
import './spell.scss';

class Spell {
  static draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.innerHTML = template;
    $('#demoModal').modal({});
  }
}

export default Spell;
