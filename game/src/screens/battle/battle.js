import $ from 'jquery';

import template from './battle.template';
import Spell from '../../components/spell/spell';
import Cast from '../cast/cast';
import Task from '../task/task';
import { pause, loadImage } from '../../utils';
import BattleAnimation from './battle.annimation';

import './battle.scss';

class Battle {
  static draw(gameState) {
    $('main').remove();
    const contentEl = document.querySelector('#content');
    contentEl.insertAdjacentHTML('beforeend', template);
    $('body').removeClass('main-bg').addClass('battle-bg');
    // BattleAnimation.drawPlayer(playerImg);
    //const nameImg = ['arm-left', 'arm-right', 'body', 'gun', 'head', 'leg-left', 'leg-right', 'attack'];
    const nameImg = ['arm-left', 'arm-right', 'body', 'head', 'legs', 'attack'];
    //const playerImg = loadImage(nameImg, 'player');
    //const monsterImg = loadImage(nameImg, 'monster');
    BattleAnimation.loadMonsterImage(nameImg);
    BattleAnimation.loadPlayerImage(['player', 'attack']);
    $('#playerName').text(gameState.playerName);
    $('#monsterName').text(gameState.monsterName);
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
    $('.js-spell').on('click', () => {
      Spell.draw();
      $('.js-attack').on('click', (event) => {
        // экран с тасками
        if (event.target.className !== 'js-attack') {
          Battle.idSpell = event.target.parentElement.id;
        } else {
          Battle.idSpell = event.target.id;
        }
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
    });
  }

  static attack(target) {
    const tempState = {
      player: Battle.gameState.playerHealthy,
      monster: Battle.gameState.monsterHealthy,
    };
    const subtractHealthy = 20;
    const maxHealthy = 100;
    // if correct answer
    if (target === true) {
      // check type spell
      switch (Battle.idSpell) {
        case 'spell-medical':
          if (tempState.player === maxHealthy) {
            alert('You are not injured');
          } else {
            tempState.player += subtractHealthy;
            BattleAnimation.playerMedical(tempState.player);
          }
          break;
        case 'spell-attack':
          tempState.monster -= subtractHealthy;
          BattleAnimation.monsterAttackAnimation(tempState.monster);
          break;
        default:
          break;
      }
      // if incorrect answet
    } else {
      tempState.player -= subtractHealthy;
      BattleAnimation.playerAttackAnimation(tempState.player);
    }
    Battle.gameState.update(tempState);
  }

  static checkTaskState() {
    const resultRound = Task.taskResult;
    Battle.attack(resultRound);
  }
}

export default Battle;
