import $ from 'jquery';
import template from './football.template';
import { randomNumber } from '../../../utils';
import './football.scss';
import tasks from './football.tasks';

class Football {
  async draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    this.taskLogic = await Football.createTaskLogic(tasks);
    this.loadImage();
  }

  static async createTaskLogic() {
    const maxQuantityArgs = 4;
    const minQantityArgs = 0;
    const taskNumb = randomNumber(minQantityArgs, maxQuantityArgs);
    const taskInfo = {
      task: tasks[taskNumb],
      taskNumber: taskNumb,
      result: '1',
    };
    Football.task = taskInfo.task;
    return taskInfo;
  }


  checkResult() {
    const value = Football.result;
    if (value === this.taskLogic.result) {
      return true;
    }
    return false;
  }

  loadImage() {
    const idImages = ['1', '2', '3'];
    let numResourcesLoaded = 0;
    const totalResources = idImages.length;
    const imagesArray = [];
    idImages.forEach((element) => {
      const image = new Image();
      image.src = `./src/components/tasks/football/img/${this.taskLogic.taskNumber}/${element}.jpg`;
      image.id = element;
      imagesArray.push(image);
      image.onload = function draw() {
        numResourcesLoaded += 1;
        if (numResourcesLoaded === totalResources) {
          imagesArray.sort(() => Math.random() - 0.5);
          Football.showTask(imagesArray);
        }
      };
    });
  }

  static showTask(images) {
    const fragment = document.createDocumentFragment();
    const question = document.createElement('div');
    const innerQestion = document.createElement('p');
    innerQestion.innerHTML = `${Football.task}`;
    question.className = 'col-sm-12 question';
    fragment.appendChild(question);
    fragment.querySelector('.question').appendChild(innerQestion);
    images.forEach((current) => {
      const outerEl = document.createElement('div');
      outerEl.className = 'col-sm-4 imgWrapper';
      fragment.appendChild(outerEl);
      fragment.querySelector('.imgWrapper:last-child').appendChild(current);
    });
    $('.task').append(fragment);
    $('.imgWrapper').on('click', Football.checkElement);
    $('#demoModal').modal({});
  }

  static checkElement(e) {
    $('.activeImg').removeClass('activeImg');
    if (e.target.className === 'imgWrapper') {
      Football.result = e.target.children[0].id;
    } else {
      Football.result = e.target.id;
    }
    e.target.className = 'activeImg';
  }

  constructor() {
    this.taskLogic = null;
  }
}

export default Football;
