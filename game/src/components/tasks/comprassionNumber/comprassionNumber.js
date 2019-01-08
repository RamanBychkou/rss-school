import $ from 'jquery';
import template from './comprassionNumber.template';
import { randomNumber } from '../../../utils';
import './comprassionNumber.scss';
import '../../../../node_modules/jquery-ui/ui/effect';

class ComprassionNumber {
  draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    this.taskLogic = ComprassionNumber.createTaskLogic();
    const that = this;
    document.querySelector('.taskWrapper .task').insertAdjacentHTML('afterbegin', this.taskLogic.task);
    $('.btnWrapper').on('click', (e) => {
      e.preventDefault();
      that.taskLogic.answer = Boolean(e.target.id);
      $('.activeBtn').removeClass('activeBtn');
      $(`#${e.target.id}`).addClass('activeBtn');
    });
    $('#demoModal').modal({});
  }

  static createTaskLogic() {
    const maxQuantityArgs = 100;
    const minQantityArgs = 1;
    const maxQuantityOperator = 3;
    const taskInfo = {
      firstArgs: randomNumber(minQantityArgs, maxQuantityArgs),
      secondArgs: randomNumber(minQantityArgs, maxQuantityArgs),
      operator: randomNumber(minQantityArgs, maxQuantityOperator),
      result: undefined,
      answer: undefined,
    };
    switch (taskInfo.operator) {
      case 1:
        taskInfo.operator = '>';
        taskInfo.result = taskInfo.firstArgs > taskInfo.secondArgs;
        taskInfo.task = `<p>${taskInfo.firstArgs} > ${taskInfo.secondArgs}</p>`;
        break;
      case 2:
        taskInfo.operator = '<';
        taskInfo.result = taskInfo.firstArgs < taskInfo.secondArgs;
        taskInfo.task = `<p>${taskInfo.firstArgs} > ${taskInfo.secondArgs}</p>`;
        break;

      case 3:
        taskInfo.operator = '=';
        taskInfo.result = taskInfo.firstArgs === taskInfo.secondArgs;
        taskInfo.task = `<p>${taskInfo.firstArgs} = ${taskInfo.secondArgs}</p>`;
        break;
      default: break;
    }
    return taskInfo;
  }

  checkResult() {
    if (this.taskLogic.answer === this.taskLogic.result) {
      return true;
    }
    return false;
  }

  constructor() {
    this.taskLogic = null;
  }
}

export default ComprassionNumber;
