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
    // ctx.drawImage(images['leg-right'], 115, 70);
    // ctx.drawImage(images.gun, 32, 230);
    //
  }

  static drawPlayer(images) {
    const whereInsert = document.querySelector('#player canvas');
    const ctx = whereInsert.getContext('2d');
    ctx.drawImage(images['player'], 0, 150);
    /*
    ctx.drawImage(images['leg-right'], 160, 270);
    ctx.drawImage(images['leg-left'], 120, 270);
    ctx.drawImage(images['arm-right'], 180, 140);
    ctx.drawImage(images.body, 90, 120);
    ctx.drawImage(images.gun, 60, 200);
    ctx.drawImage(images['arm-left'], 80, 150);
    ctx.drawImage(images.head, 80, 0);
    // ctx.drawImage(images['arm-left'], 130, 180);
    */
  }

  static playerAttackAnimation(value) {
    $('.battlefield').append(BattleAnimation.monsterImg.attack);
    $('#playerHp span').css('width', `${value}%`);
    $('.battlefield img').addClass('attack-monster');
    document.querySelector('.attack-monster').addEventListener('animationend', () => $('.attack-monster').remove());
  }

  static monsterAttackAnimation(value) {
    $('.battlefield').append(BattleAnimation.playerImg.attack);

    $('.battlefield img').addClass('attack-player');
    document.querySelector('.attack-player').addEventListener('animationend', () => $('.attack-player').remove());
    $('#monsterHp span').css('width', `${value}%`);
  }

  static playerMedical(value) {
    $('#playerHp span').css('width', `${value}%`);
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
}
export default BattleAnimation;
