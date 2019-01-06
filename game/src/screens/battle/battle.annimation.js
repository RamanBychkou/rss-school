import $ from 'jquery';

class BattleAnimation {
  static drawMonster(images) {
    const whereInsert = document.querySelector('#monster canvas');
    const ctx = whereInsert.getContext('2d');
    ctx.drawImage(images['arm-right'], 60, 230);
    ctx.drawImage(images['leg-left'], 90, 287);
    ctx.drawImage(images['leg-right'], 115, 287);
    ctx.drawImage(images.body, 80, 230);
    ctx.drawImage(images.head, 50, 80);
    ctx.drawImage(images.gun, 32, 230);
    ctx.drawImage(images['arm-left'], 140, 245);
  }

  static drawPlayer(images) {
    const whereInsert = document.querySelector('#player canvas');
    const ctx = whereInsert.getContext('2d');
    ctx.drawImage(images['leg-right'], 160, 270);
    ctx.drawImage(images['leg-left'], 120, 270);
    ctx.drawImage(images['arm-right'], 180, 140);
    ctx.drawImage(images.body, 90, 120);
    ctx.drawImage(images.gun, 60, 200);
    ctx.drawImage(images['arm-left'], 80, 150);
    ctx.drawImage(images.head, 80, 0);
    // ctx.drawImage(images['arm-left'], 130, 180);
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
}
export default BattleAnimation;
