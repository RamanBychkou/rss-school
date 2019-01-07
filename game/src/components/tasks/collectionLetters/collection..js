import $ from 'jquery';
import '../../../../node_modules/jquery-ui/ui/widgets/draggable';
import '../../../../node_modules/jquery-ui/ui/widgets/droppable';
import template from './collection.template';
import tasks from './collection.tasks';
import { randomNumber } from '../../../utils';
import './collection.scss';


class Collection {
  draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    this.taskLogic = Collection.createTaskLogic(tasks);
    // insert task in template
    Collection.showTask(this.taskLogic);
    $('#demoModal').modal({});
  }

  static createTaskLogic(task) {
    // task choose with random number, max - max id task in array tasks
    const maxQuantityArgs = 6;
    const minQantityArgs = 1;
    const random = randomNumber(minQantityArgs, maxQuantityArgs);
    const taskArray = task[random].split('');
    const taskInfo = {
      task: taskArray.sort(),
      result: task[random],
      lettersQuantity: taskArray.length,
    };
    return taskInfo;
  }

  checkResult() {
    const value = $('#sortable span').text();
    const answer = this.taskLogic.result;
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

export default Collection;
