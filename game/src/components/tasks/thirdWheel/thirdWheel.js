import $ from 'jquery';
import template from './thirdWheel.template';
import { randomNumber } from '../../../utils';
import './thirdWheel.scss';

class ThirdWheel {
  async draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    this.taskLogic = await ThirdWheel.createTaskLogic();
    this.loadImage();
  }

  static async createTaskLogic() {
    const maxQuantityArgs = 5;
    const minQantityArgs = 1;
    const taskInfo = {
      task: randomNumber(minQantityArgs, maxQuantityArgs),
      result: '1',
    };
    return taskInfo;
  }


  checkResult() {
    const value = ThirdWheel.result;
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
      image.src = `./src/components/tasks/thirdWheel/img/${this.taskLogic.task}/${element}.png`;
      image.id = element;
      imagesArray.push(image);
      image.onload = function draw() {
        numResourcesLoaded += 1;
        if (numResourcesLoaded === totalResources) {
          imagesArray.sort(function compareRandom(a, b) {
            return Math.random() - 0.5;
          });
          ThirdWheel.showTask(imagesArray);
        }
      };
    });
  }

  static showTask(images) {
    const fragment = document.createDocumentFragment();

    images.forEach((current) => {
      const outerEl = document.createElement('div');
      outerEl.className = 'col-sm-4 imgWrapper';
      fragment.appendChild(outerEl);
      fragment.querySelector('.imgWrapper:last-child').appendChild(current);
    });
    $('.task').append(fragment);
    $('.imgWrapper').on('click', ThirdWheel.checkElement);
    $('#demoModal').modal({});
  }

  static checkElement(e) {
    $('.activeImg').removeClass('activeImg');
    if (e.target.className === 'imgWrapper') {
      ThirdWheel.result = e.target.children[0].id;
    } else {
      ThirdWheel.result = e.target.id;
    }
    e.target.className = 'activeImg';
  }

  constructor() {
    this.taskLogic = null;
  }
}

export default ThirdWheel;
