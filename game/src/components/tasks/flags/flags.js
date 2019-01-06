import $ from 'jquery';
import template from './flags.template';
import { randomNumber } from '../../../utils';
import './flags.scss';

class Flags {
  draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    const name = this.nameImages;
    const answers = this.answers;
    Flags.loadImage(name, answers);
  }

  static async createTaskLogic(images) {
    const maxQantity = 15;
    const minQantity = 1;
    // task choose with random number, max - max id task in array tasks
    const numberImages = await randomNumber(minQantity, maxQantity);
    const taskInfo = {
      taskFlag: images[numberImages],
      result: images[numberImages].alt,
    };
    Flags.taskLogic = taskInfo;
    Flags.showTask(taskInfo);
  }


  checkResult() {
    const value = $('form > input').val().toLowerCase();
    if (value === Flags.taskLogic.result) {
      return true;
    }
    return false;
  }

  setData(task) {
    this.answers.taskLogic = task;
  }

  static loadImage(nameImages, answers) {
    let numResourcesLoaded = 0;
    const totalResources = nameImages.length;
    const images = {};
    nameImages.forEach((element, index) => {
      images[element] = new Image();
      images[element].src = `./src/components/tasks/flags/img/${element}.png`;
      images[element].alt = answers[index];
      images[element].onload = function draw() {
        numResourcesLoaded += 1;
        if (numResourcesLoaded === totalResources) {
          Flags.createTaskLogic(images);
        }
      };
    });
  }

  static showTask(task) {
    $('figure').append(task.taskFlag);
    $('#demoModal').modal({});
  }

  constructor() {
    this.taskLogic = null;
    this.nameImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    this.answers = ['armenia', 'australia', 'brazil', 'belarus', 'canada', 'france', 'great britain', 'georgia', 'greece', 'israel', 'iraq', 'japan', 'russia', 'ukraine', 'usa'];
  }
}

export default Flags;
