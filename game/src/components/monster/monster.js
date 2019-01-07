import { randomNumber } from '../../utils';
import BattleAnimation from '../../screens/battle/battle.annimation';

class Monster {
  constructor() {
    this.monsterName = '';
    this.firstName = ['Злобный', 'Ужасный', 'Вонючий', 'Страшный', 'Могучий'];
    this.secondName = ['Огр', 'Гном', 'Орк', 'Гоблин', 'Тролль'];
    this.lastName = ['Чарли', 'Фред', 'Джордж', 'Рон', 'Перси'];
  }

  createNameMonster() {
    const firstName = `${this.firstName[randomNumber(0, 4)]} `;
    const secondName = `${this.secondName[randomNumber(0, 4)]} `;
    const lastName = this.lastName[randomNumber(0, 4)];
    this.monsterName = firstName + secondName + lastName;
  }

  getMonsterName() {
    return this.monsterName;
  }

  static loadMonsterImage(nameImages) {
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
          BattleAnimation.monsterImg = images;
          BattleAnimation.drawMonster(images);
        }
      };
    });
  }
}
export default Monster;
