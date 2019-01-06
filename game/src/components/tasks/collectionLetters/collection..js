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
    let value = '';
    const arrayAnswer = $('#targetTable').children();
    const arrayAnswerLength = arrayAnswer.length;
    for (let i = 0; i < arrayAnswerLength; i += 1) {
      const idElement = arrayAnswer[i].id;
      value += idElement;
    }
    if (value === this.taskLogic.result) {
      return true;
    }
    return false;
  }

  static showTask(task) {
    const quantityLetters = task.task.length;
    const fragmentAnswer = document.createDocumentFragment();
    const fragmentLetters = document.createDocumentFragment();
    const tr = document.createElement('tr');
    tr.id = 'targetTable';
    fragmentAnswer.appendChild(tr);
    const letterWrapper = document.createElement('div');
    letterWrapper.className = 'row lettersField';
    fragmentLetters.appendChild(letterWrapper);
    for (let i = 0; i < quantityLetters; i += 1) {
      const cell = document.createElement('td');
      fragmentAnswer.querySelector('#targetTable').appendChild(cell);
      const outerElement = document.createElement('div');
      outerElement.className = 'letters';
      const innerElement = document.createElement('p');
      innerElement.id = task.task[i];
      fragmentLetters.querySelector('.lettersField').appendChild(outerElement);
      fragmentLetters.querySelector('.lettersField .letters:last-child').appendChild(innerElement);
      fragmentLetters.querySelector('.lettersField .letters:last-child p').innerHTML = task.task[i];
    }
    $('.answerField table').append(fragmentAnswer);
    $('.task').append(fragmentLetters);
    $('.letters p').draggable();
    $('td').droppable({
      over(event, ui) {
        const elDrag = ui.draggable[0].id;
        this.id = '';
        this.id = elDrag;
      },
    });
  }

  constructor() {
    this.taskLogic = null;
  }
}

export default Collection;
