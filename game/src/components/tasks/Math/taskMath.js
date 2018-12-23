import $ from 'jquery';
import template from './taskMath.template';
import './taskMath.css';

class taskMath {
  static draw() {
    const contentEl = document.querySelector('#demoModal .modal-body');
    contentEl.insertAdjacentHTML('beforeend', template);
    $('#cast').remove();
    const taskLogic = this.createTaskLogic();
    document.querySelector('.taskWrapper form').insertAdjacentHTML('afterbegin', taskLogic.task);
    $('#demoModal').modal({});
    $('.js-answer').on('click', (e) => {
      e.preventDefault();
      $('#demoModal').modal('hide');
      this.checkResult(taskLogic.result);
    });
  }

  static createTaskLogic() {
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

  static randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  static checkResult(result) {
    const value = $('form > input').val();
    if (value === result) {
      return true;
    }
    return false;
  }
}

export default taskMath;
