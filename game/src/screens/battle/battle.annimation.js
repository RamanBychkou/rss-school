import $ from 'jquery';
import Monster from '../../components/monster/monster';

class BattleAnimation {
  static drawMonster(images) {
    const whereInsert = document.querySelector('#monster canvas');
    const ctx = whereInsert.getContext('2d');
    ctx.drawImage(images.legs, 230, 220);
    ctx.drawImage(images['arm-right'], 15, 90);
    ctx.drawImage(images.body, 200, 75);
    ctx.drawImage(images['arm-left'], 345, 90);
    ctx.drawImage(images.head, 250, 70);
  }

  static drawPlayer(images) {
    const whereInsert = document.querySelector('#player canvas');
    const ctx = whereInsert.getContext('2d');
    ctx.drawImage(images.player, 0, 150);
  }

  static playerAttackAnimation(value) {
    $('.battlefield').append(BattleAnimation.monsterImg.attack);
    $('#playerHp span').css('width', `${value}%`);
    $('.battlefield img').addClass('attack-monster');
    document.querySelector('.attack-monster').addEventListener('animationend', () => {
      $('.attack-monster').remove();
      document.querySelector('#attack-monster').play();
    });
  }

  static monsterAttackAnimation(value) {
    $('.battlefield').append(BattleAnimation.playerImg.attack);

    $('.battlefield img').addClass('attack-player');
    document.querySelector('.attack-player').addEventListener('animationend', () => {
      $('.attack-player').remove();
      document.querySelector('#attack-player').play();
    });
    $('#monsterHp span').css('width', `${value}%`);
  }

  static playerMedical(value) {
    $('#playerHp span').css('width', `${value}%`);
    $('#player').append(BattleAnimation.playerImg.halo);
    $('#player img').addClass('medicalPlayer');
    document.querySelector('#medical').play();
    document.querySelector('.medicalPlayer').addEventListener('animationend', () => {
      $('.medicalPlayer').remove();
    });
  }

  static loadMonsterImage(name) {
    Monster.loadMonsterImage(name);
  }

  static loadPlayerImage(nameImages) {
    let numResourcesLoaded = 0;
    const totalResources = nameImages.length;
    const images = {};
    nameImages.forEach((element) => {
      images[element] = new Image();
      images[element].src = `./src/screens/battle/img/player/${element}.png`;
      images[element].onload = function draw() {
        numResourcesLoaded += 1;
        if (numResourcesLoaded === totalResources) {
          BattleAnimation.playerImg = images;
          BattleAnimation.drawPlayer(images);
        }
      };
    });
  }

  static loadBattleAudio() {
    const name = ['attack-player', 'attack-monster', 'medical'];
    name.forEach((current) => {
      const audioElement = new Audio(`src/screens/battle/audio/${current}.mp3`);
      audioElement.id = current;
      audioElement.preload = true;
      $('main').append(audioElement);
    });
  }
}
export default BattleAnimation;
