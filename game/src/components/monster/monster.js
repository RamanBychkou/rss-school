import { randomNumber } from '../../utils';

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
}
export default Monster;
