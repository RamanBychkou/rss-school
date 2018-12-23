import $ from 'jquery';

import template from './battle.template';


class Battle {
  static draw(gameState) {
    const contentEl = document.querySelector('#content');
    contentEl.innerHTML = template;

    $('.js-player-card .js-name').text(gameState.playerName);
  }

  static empty() {
    $('#battle').empty();
  }

  constructor() {
    this.player = {
      view: {
        healthy: 100,
      },
    };
    this.monster = {
      view: {
        healthy: 100,
      },
    };
    this.subtractHealthy = 20;
    this.currentState = {
    };
  }

  attack(person = this.monster) {
    let { view } = person;
    view.healthy -= this.subtractHealthy;
    console.log(person);
    return person;
  }
}

export default Battle;
