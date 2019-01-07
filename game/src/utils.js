import BattleAnimation from './screens/battle/battle.annimation';

// eslint-disable-next-line
export const pause = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});
export const loadImage = (nameImages, who) => {
  let numResourcesLoaded = 0;
  const totalResources = nameImages.length;
  const images = {};
  const randomHead = randomNumber(1, 3);
  const randomArm = randomNumber(1, 3);
  const randomBody = randomNumber(1, 3);
  const randomLegs = randomNumber(1, 3);
  nameImages.forEach((element) => {
    let folder;
    switch (element) {
      case 'arm-left':
        folder = randomArm;
        break;
      case 'arm-right':
        folder = randomArm;
        break;
      case 'legs':
        folder = randomLegs;
        break;
      case 'body':
        folder = randomBody;
        break;
      case 'head':
        folder = randomHead;
        break;
      case 'attack':
        folder = 1;
        break;
      default:
        break;
    }
    images[element] = new Image();
    images[element].src = `./src/screens/battle/img/monster/${folder}/${element}.png`;
    images[element].onload = function draw() {
      numResourcesLoaded += 1;
      if (numResourcesLoaded === totalResources) {
        if (who === 'monster') {
          BattleAnimation.monsterImg = images;
          BattleAnimation.drawMonster(images);
        } else {
          BattleAnimation.playerImg = images;
          BattleAnimation.drawPlayer(images);
        }
      }
    };
  });
};

export const randomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};
