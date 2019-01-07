import $ from 'jquery';
import '../../../../node_modules/jquery-ui/ui/widgets/sortable';
import template from './reorderNumber.template';
import { randomNumber } from '../../../utils';
import './reorderNumber.scss';


class ReorderNumber {
  draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    this.taskLogic = ReorderNumber.createTaskLogic();
    // insert task in template
    ReorderNumber.showTask(this.taskLogic);
    $('#demoModal').modal({});
  }

  static createTaskLogic() {
    // task choose with random number, max - max id task in array tasks
    const maxQuantityArgs = 100;
    const minQantityArgs = 1;
    const maxQuantityNumbers = 6;
    const taskArray = [];
    const answer = [];
    for (let i = 0; i < maxQuantityNumbers; i += 1) {
      const numb = randomNumber(minQantityArgs, maxQuantityArgs);
      taskArray.push(numb);
      answer.push(numb);
    }
    const taskInfo = {
      task: taskArray,
      result: answer.sort((a, b) => a - b),
    };
    return taskInfo;
  }

  checkResult() {
    const value = $('#sortable span').text();
    const answer = this.taskLogic.result.join('');
    if (value === answer) {
      return true;
    }
    return false;
  }

  static showTask(task) {
    const fragment = document.createDocumentFragment();
    task.task.forEach((current) => {
      const outerEl = document.createElement('li');
      const innerEl = document.createElement('span');
      outerEl.className = 'ui-state-default';
      innerEl.className = 'ui-icon ui-icon-arrowthick-2-n-s';
      innerEl.innerHTML = `${current}`;
      fragment.appendChild(outerEl);
      fragment.querySelector('li:last-child').appendChild(innerEl);
    });
    $('#sortable').append(fragment);
    $('#sortable').sortable();
  }

  constructor() {
    this.taskLogic = null;
  }
}

export default ReorderNumber;
