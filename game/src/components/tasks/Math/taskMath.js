import $ from 'jquery';
import template from './taskMath.template';
import { randomNumber } from '../../../utils';
import './taskMath.scss';

class TaskMath {
  draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    this.taskLogic = TaskMath.createTaskLogic();
    document.querySelector('.taskWrapper form').insertAdjacentHTML('afterbegin', this.taskLogic.task);
    $('#demoModal').modal({});
  }

  static createTaskLogic() {
    const maxQuantityArgs = 10;
    const minQantityArgs = 1;
    const maxQuantityOperator = 4;
    const taskInfo = {
      firstArgs: randomNumber(minQantityArgs, maxQuantityArgs),
      secondArgs: randomNumber(minQantityArgs, maxQuantityArgs),
      operator: randomNumber(minQantityArgs, maxQuantityOperator),
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

export default TaskMath;
