import $ from 'jquery';
import template from './listening.template';
import './listening.scss';
import tasks from './listening.tasks';
import { randomNumber } from '../../../utils';

class Listening {
  async draw() {
    $('.cast').remove();
    const contentEl = document.querySelector('#demoModal .modal-content');
    // insert template in document
    contentEl.insertAdjacentHTML('beforeend', template);
    // create task logic
    this.taskLogic = Listening.createTaskLogic();
    const loadFile = await this.loadAudio();
    $('.taskWrapper').append(loadFile);
    $('#demoModal').modal({});
  }

  static createTaskLogic() {
    // task choose with random number, max - max id task in array tasks
    const maxQuantityArgs = 9;
    const minQantityArgs = 0;
    const currentTask = tasks[randomNumber(minQantityArgs, maxQuantityArgs)];
    const taskInfo = {
      task: currentTask,
      result: currentTask,
    };
    return taskInfo;
  }

  checkResult() {
    const value = $('form > input').val().toLowerCase();
    if (value === this.taskLogic.result) {
      return true;
    }
    return false;
  }

  loadAudio() {
    const audio = new Audio();
    audio.src = `./src/components/tasks/listening/audio/${this.taskLogic.task}.mp3`;
    audio.preload = 'auto';
    audio.controls = true;
    return audio;
  }

  constructor() {
    this.taskLogic = null;
  }
}

export default Listening;
