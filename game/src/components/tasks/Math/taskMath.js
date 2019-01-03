import $ from 'jquery';
import template from './taskMath.template';
import './taskMath.scss';

class taskMath {
  draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    console.log(this);
    this.taskLogic = this.createTaskLogic();
    document.querySelector('.taskWrapper form').insertAdjacentHTML('afterbegin', this.taskLogic.task);
    $('#demoModal').modal({});
  }

  createTaskLogic() {
    const maxQuantityArgs = 10;
    const minQantityArgs = 1;
    const maxQuantityOperator = 4;
    const taskInfo = {
      firstArgs: this.randomInteger(minQantityArgs, maxQuantityArgs),
      secondArgs: this.randomInteger(minQantityArgs, maxQuantityArgs),
      operator: this.randomInteger(minQantityArgs, maxQuantityOperator),
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
