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
        function check() {
          e.preventDefault();

          this.checkTaskState(Task);
        }
        $('.js-answer').on('click', $.proxy(check, this, e));
      });
    });
  }

  static attack(target) {
    const tempState = {
      player: Battle.gameState.playerHealthy,
      monster: Battle.gameState.monsterHealthy,
    };
    const subtractHealthy = 20;
    if (target === true) {
      tempState.monster -= subtractHealthy;
    } else {
      tempState.player -= subtractHealthy;
    }
    Battle.gameState.update(tempState);
    console.log(Battle.gameState);
  }

  static checkTaskState() {
    const resultRound = Task.taskResult;
    Battle.attack(resultRound);
  }
}

export default Battle;
