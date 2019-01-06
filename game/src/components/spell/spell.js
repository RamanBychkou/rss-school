import $ from 'jquery';
import template from './spell.template';
import './spell.scss';

class Spell {
  static draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.innerHTML = template;
    //contentEl.insertAdjacentHTML('beforeend', template);
    $('form > div').on('click', (e) => {
      const idSpell = e.target.id;
    });
    $('#demoModal').modal({});
  }
}

export default Spell;
