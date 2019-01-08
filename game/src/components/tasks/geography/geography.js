import $ from 'jquery';
import template from './geography.template';
import { randomNumber } from '../../../utils';
import './geography.scss';
import tasks from './geography.tasks';

class Geography {
  draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    this.taskLogic = Geography.createTaskLogic(tasks);
    this.showTask();
    $('#demoModal').modal({});
  }

  static createTaskLogic(task) {
    const maxQuantityArgs = 9;
    const minQantityArgs = 0;
    const numberTask = randomNumber(minQantityArgs, maxQuantityArgs);
    const taskInfo = {
      task: task[numberTask].question,
      result: task[numberTask].answer,
    };
    return taskInfo;
  }

  showTask() {
    $('.task p ').text(this.taskLogic.task);
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

export default Geography;
