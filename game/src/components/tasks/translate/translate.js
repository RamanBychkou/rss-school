import $ from 'jquery';
import template from './translate.template';
import tasks from './translate.tasks';
import { randomNumber } from '../../../utils';
import './translate.scss';


class Translate {
  draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    this.taskLogic = Translate.createTaskLogic(tasks);
    $('label > span ').text(this.taskLogic.task);
    $('#demoModal').modal({});
  }

  static createTaskLogic(taskArray) {
    // task choose with random number, max - max id task in array tasks
    const maxQuantity = 9;
    const minQuantity = 0;
    const numberTask = randomNumber(minQuantity, maxQuantity);
    const taskInfo = {
      task: taskArray[numberTask].task,
      result: taskArray[numberTask].answer,
    };
    return taskInfo;
  }

  checkResult() {
    const value = $('form > input').val().toLowerCase();
    if (value === this.taskLogic.result) {
      return true;
    }
    return false;
  }

  constructor() {
    this.taskLogic = null;
  }
}

export default Translate;
