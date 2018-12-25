import $ from 'jquery';
import template from './taskMath.template';
import './taskMath.css';

class taskMath {
  draw() {
    const contentEl = document.querySelector('#demoModal .modal-body');
    contentEl.insertAdjacentHTML('beforeend', template);
    $('#cast').remove();
    console.log(this);
    this.taskLogic = this.createTaskLogic();
    document.querySelector('.taskWrapper form').insertAdjacentHTML('afterbegin', this.taskLogic.task);
    $('#demoModal').modal({});
  }

  createTaskLogic() {
    const taskInfo = {
      firstArgs: this.randomInteger(0, 100),
      secondArgs: this.randomInteger(0, 100),
      operator: this.randomInteger(1, 4),
      result: undefined,
    };
    switch (taskInfo.operator) {
      case 1:
        taskInfo.operator = '+';
        taskInfo.result = taskInfo.firstArgs + taskInfo.secondArgs;
        taskInfo.task = `<label>${taskInfo.firstArgs} + ${taskInfo.secondArgs}</label>`;
        break;
      case 2:
        taskInfo.operator = '-';
        taskInfo.result = taskInfo.firstArgs - taskInfo.secondArgs;
        taskInfo.task = `<label>${taskInfo.firstArgs} - ${taskInfo.secondArgs}</label>`;
        break;

      case 3:
        taskInfo.operator = '*';
        taskInfo.result = taskInfo.firstArgs * taskInfo.secondArgs;
        taskInfo.task = `<label>${taskInfo.firstArgs} * ${taskInfo.secondArgs}</label>`;
        break;

      case 4:
        taskInfo.operator = '/';
        taskInfo.result = taskInfo.firstArgs / taskInfo.secondArgs;
        taskInfo.task = `<label>${taskInfo.firstArgs} / ${taskInfo.secondArgs}</label>`;
        break;

      default: break;
    }
    return taskInfo;
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  checkResult() {
    const value = +($('form > input').val());
    if (value === this.taskLogic.result) {
      return true;
    }
    return false;
  }

  constructor() {
    this.taskLogic = null;
  }
}

export default taskMath;
