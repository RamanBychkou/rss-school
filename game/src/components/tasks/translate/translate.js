import $ from 'jquery';
import template from './translate.template';
import './translate.scss';
import tasks from './translate.tasks';

class Translate {
  draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    console.log(this);
    this.taskLogic = this.createTaskLogic(tasks);
    $('label > span ').text(this.taskLogic.task);
    $('#demoModal').modal({});
  }

  createTaskLogic(taskArray) {
    const numberTask = this.randomInteger(0, 10);
    const taskInfo = {
      task: taskArray[numberTask].task,
      result: taskArray[numberTask].answer,
    };
    return taskInfo;
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
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
