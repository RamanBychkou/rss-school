import $ from 'jquery';
import '../../../../node_modules/jquery-ui/ui/widgets/draggable';
import '../../../../node_modules/jquery-ui/ui/widgets/droppable';
import template from './collection.template';
import tasks from './collection.tasks';
import './collection.scss';


class Collection {
  draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    contentEl.insertAdjacentHTML('beforeend', template);
    console.log(this);
    this.taskLogic = this.createTaskLogic(tasks);
    //document.querySelector('.taskWrapper form').insertAdjacentHTML('afterbegin', this.taskLogic.task);
    this.showTask(this.taskLogic);
    $('#demoModal').modal({});
  }

  createTaskLogic(task) {
    const maxQuantityArgs = 6;
    const minQantityArgs = 1;
    const random = this.randomInteger(minQantityArgs, maxQuantityArgs);
    const taskArray = task[random].split('');
    const taskInfo = {
      task: taskArray.sort(),
      result: task[random],
      lettersQuantity: taskArray.length,
    };
    return taskInfo;
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  checkResult() {
    let value = '';
    let arrayAnswer = $('#targetTable').children();
    let arrayAnswerLength = arrayAnswer.length;
    for (let i = 0; i < arrayAnswerLength; i += 1) {
      const idElement = arrayAnswer[i].id;
      value += idElement;
    }
    if (value === this.taskLogic.result) {
      return true;
    }
    return false;
  }

  showTask(task) {
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
      let cell = document.createElement('td');
      fragmentAnswer.querySelector('#targetTable').appendChild(cell);
      let outerElement = document.createElement('div');
      outerElement.className = 'letters';
      let innerElement = document.createElement('p');
      innerElement.id = task.task[i];
      fragmentLetters.querySelector('.lettersField').appendChild(outerElement);
      fragmentLetters.querySelector('.lettersField .letters:last-child').appendChild(innerElement);
      fragmentLetters.querySelector('.lettersField .letters:last-child p').innerHTML = task.task[i];
    }
    $('.answerField table').append(fragmentAnswer);
    $('.task').append(fragmentLetters);
    $('.letters p').draggable();
    $('td').droppable({
      over: function(event, ui) { 
       let elDrag = ui.draggable[0].id
       this.id = '';
       this.id = elDrag;
      }
   });
  }

  constructor() {
    this.taskLogic = null;
  }
}

export default Collection;
