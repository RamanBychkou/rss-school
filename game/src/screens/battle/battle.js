import $ from 'jquery';

import template from './battle.template';
import Cast from '../cast/cast';
import Task from '../task/task';
import { pause } from '../../utils';

class Battle {
  static draw(gameState) {
    const contentEl = document.querySelector('#content');
    contentEl.innerHTML = template;

    $('.js-player-card .js-name').text(gameState.playerName);
    this.gameLoop(gameState);
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
  }

  static gameLoop(gameState) {
    $('.js-attack').on('click', (e) => {
      // экран с тасками
      console.log(gameState);
      const chosenCast = Cast.getPlayerCast();
      // выбор таска
      $('.taskWrapper').on('click', async (e) => {
        $('#demoModal').modal('hide');
        await pause(1000);
        const taskName = e.target.id;
        // отрисовка отдельного таска
        Task.getPlayerCast(taskName);
        const that = Battle;
        function check() {
          console.log(this);
          console.log(Task);
          e.preventDefault();
          this.checkTaskState(Task);
        }
        $('#demoModal form .btn').on('click', $.proxy(check, this, e));
      });
    });
  }

  attack(target) {
    let person;
    if (target === true) {
      person = this.monster;
    } else {
      person = this.player;
    }
    const { view } = person;
    view.healthy -= this.subtractHealthy;
    return {
      player: this.player.view.healthy,
      monster: this.monster.view.healthy,
    };
  }

  static checkTaskState() {
    const resultRound = Task.taskResult;
    const at = Battle.attack(resultRound);
    console.log(at);
  }
}

export default Battle;
